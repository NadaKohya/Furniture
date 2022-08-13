using System;
using System.ComponentModel.DataAnnotations;

namespace AngularAPI.DTO
{
	public class LoginUserDTO
	{
		[Required]
		public string? Name { get; set; }
		[DataType(DataType.Password)]
		[Required]
		public string? Password { get; set; }
		public bool RememberMe { get; set; }
	}
}

