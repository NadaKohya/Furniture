using System;
using System.ComponentModel.DataAnnotations;

namespace AngularAPI.DTO
{
	public class ProductDataWithCategoryNameDTO
	{
	[Required]
	public int Id { get; set; }
	[Required]
	public string Name { get; set; }
	[Required]
	public int Price { get; set; }
	public string Description { get; set; }
	[Required]
	public string Image1 { get; set; }
	[Required]
	public string Image2 { get; set; }
	public string Image3 { get; set; }
	public string CategoryName { get; set; }
	}
}

