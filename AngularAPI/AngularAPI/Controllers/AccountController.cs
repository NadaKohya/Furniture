using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AngularAPI.DTO;
using AngularAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace AngularAPI.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly IConfiguration configuration;
        public AccountController(UserManager<ApplicationUser> userManager, IConfiguration configuration, SignInManager<ApplicationUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
        }

        //Create New Account (Registeration) "Post==body"
        [HttpPost("register")]
        public async Task<IActionResult> Registeration(RegisterUserDTO userDTO)
        {
            if (ModelState.IsValid)
            {
                //Save
                ApplicationUser user = new ApplicationUser();
                user.UserName = userDTO.Name;
                user.Email = userDTO.Email;
                IdentityResult result = await userManager.CreateAsync(user, userDTO.Password);
                if (result.Succeeded)
                {
                    await signInManager.SignInAsync(user, false);
                    return Ok("Registeration succeeded!");
                }
                return BadRequest(result.Errors.FirstOrDefault());
            }
            return BadRequest(ModelState);
        }

        //Check Account Credentials (Login) "Post==body"
        [HttpPost("login")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginUserDTO userDTO)
        {
            if (ModelState.IsValid)
            {
                //Check credentials
                //1-find user by name
                ApplicationUser user = await userManager.FindByNameAsync(userDTO.Name);

                if (user != null)
                {
                    //2-check if the user has the same password of userDto
                    bool found = await userManager.CheckPasswordAsync(user, userDTO.Password);

                    if (found)
                    {
                        //Token claims
                        var claims = new List<Claim>();
                        claims.Add(new Claim(ClaimTypes.Name, user.UserName));
                        claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id));
                        claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));

                        //Get role
                        var roles = await userManager.GetRolesAsync(user);
                        foreach (var itemRole in roles)
                        {
                            claims.Add(new Claim(ClaimTypes.Role, itemRole));
                        }

                        //Security Key
                        SecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:SecretKey"]));

                        //Signing Credentials
                        SigningCredentials signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                        //Create token
                        JwtSecurityToken myToken = new JwtSecurityToken(
                            issuer: configuration["JWT:ValidIssuer"], //URL of provider
                            audience: configuration["JWT:ValidConsumer"], //URL of consumer
                            claims: claims,
                            expires: DateTime.Now.AddHours(5),
                            signingCredentials: signingCredentials
                            );
                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(myToken),
                            expiration = myToken.ValidTo
                        });
                    }
                    return Unauthorized();
                }
                return Unauthorized();
            }
            return Unauthorized();
        }

        public async Task<IActionResult> signOut()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("Login");
        }
    }
}
