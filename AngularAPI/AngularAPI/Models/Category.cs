using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace AngularAPI.Models
{
	public class Category
	{
		public int Id { get; set; }
		[Required]
		public string? Name { get; set; }
		public  List<Product> Products = new List<Product>(); 
	}
}

