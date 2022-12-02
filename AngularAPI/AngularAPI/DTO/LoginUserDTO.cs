using System;
using System.ComponentModel.DataAnnotations;

namespace AngularAPI.DTO
{
	public class LoginUserDTO
	{
		[Required]
		public string? UserName { get; set; }
		[Required]
		public string? Password { get; set; }
		//public bool RememberMe { get; set; }
	}
}

