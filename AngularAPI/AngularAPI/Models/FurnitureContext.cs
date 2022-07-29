using System;
using Microsoft.EntityFrameworkCore;

namespace AngularAPI.Models
{
	public class FurnitureContext:DbContext
	{
		public FurnitureContext()
		{
		}
        
        public FurnitureContext(DbContextOptions options) : base(options)
        {
        }
       
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}

