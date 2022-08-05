using System;
using System.ComponentModel.DataAnnotations;

namespace AngularAPI.Models
{
	public class Role
	{
		[Required]
		public string? Name { get; set; }
	}
}

