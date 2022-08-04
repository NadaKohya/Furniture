using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularAPI.Models
{
	public class Product
	{
		[Required]
		public int Id { get; set; }
		[Required]
		public string? Name { get; set; }
		[Required]
		public int Price { get; set; }
		public string? Description { get; set; }
		public string? Best { get; set; }
		[Required]
		public string? Image1 { get; set; }
		[Required]
		public string? Image2 { get; set; }
		public string? Image3 { get; set; }
		[ForeignKey("Category")]
		public int CategoryId { get; set; }
		public virtual Category? Category { get; set; }
	}
}

