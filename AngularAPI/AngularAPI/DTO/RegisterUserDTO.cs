﻿using System;
using System.ComponentModel.DataAnnotations;

namespace AngularAPI.DTO
{
	public class RegisterUserDTO
	{
		[Required]
		public string? Name { get; set; }
		[Required]
		public string? Password { get; set; }
		[Required]
		[Compare("Password")]
		public string? ConfirmPassword { get; set; }
		public string? Email { get; set; }
	}
}

