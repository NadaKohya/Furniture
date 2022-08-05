using AngularAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AngularAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        public readonly FurnitureContext context;
        public CategoryController(FurnitureContext context)
        {
            this.context = context;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Category> Categories = context.Categories.ToList();
            return Ok(Categories);
        }

        [AllowAnonymous]
        [HttpGet("{id:int}")] // I put int to distinguish if I want to get category by name in another action .. HttpGet("{name:alpha}")
        public async Task<IActionResult> getProduct(int id)
        {
            Category category = context.Categories.FirstOrDefault(x => x.Id == id);
            if (category == null)
            {
                return BadRequest("the id doesn't exist");
            }
            return Ok(category);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Category category)
        {
            if(ModelState.IsValid == true)
            {
                context.Categories.Add(category);
                context.SaveChanges();
                return Ok("Saved");
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put([FromBody]Category category, [FromRoute] int id)
        {
            if (ModelState.IsValid == true)
            {
                Category oldCategory = context.Categories.FirstOrDefault(x => x.Id == id);
                if(oldCategory != null)
                {
                    oldCategory.Name = category.Name;
                    context.SaveChanges();
                    return StatusCode(204, "Saved");
                }
                return BadRequest("ID is not valid");
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            Category category = context.Categories.FirstOrDefault(x => x.Id == id);
            if (category != null)
            {
                try
                {
                    context.Categories.Remove(category);
                    context.SaveChanges();
                    return StatusCode(204, "Record is removed");
                }
                catch(Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return BadRequest("ID doesn't exist");
        }
    }
}

