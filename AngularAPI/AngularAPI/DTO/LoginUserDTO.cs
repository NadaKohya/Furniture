using System;
using System.ComponentModel.DataAnnotations;

namespace AngularAPI.DTO
{
	public class LoginUserDTO
	{
		public string? Name { get; set; }
		[DataType(DataType.Password)]
		public string? Password { get; set; }
		public bool RememberMe { get; set; }
	}
}

