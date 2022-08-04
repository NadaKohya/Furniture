using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AngularAPI.Models
{
	public class FurnitureContext:IdentityDbContext<ApplicationUser>
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

