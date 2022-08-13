using AngularAPI.DTO;
using AngularAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularAPI.Controllers
{
    //[Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        public readonly FurnitureContext context;
        public ProductController(FurnitureContext context)
        {
            this.context = context;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Product> Products = context.Products.Include(c => c.Category).ToList();
            return Ok(Products);
        }

        [AllowAnonymous]
        [HttpGet("{id:int}", Name = "getProduct")] // I put int to distinguish if I want to get product by its name in another action .. HttpGet("{name:alpha}")
        public async Task<IActionResult> getProduct(int id)
        {
            Product product = context.Products.Include(c => c.Category).FirstOrDefault(p => p.Id == id);
            ProductDataWithCategoryNameDTO productDTO = new ProductDataWithCategoryNameDTO();
                if (product != null)
            {
                productDTO.Name = product.Name;
                productDTO.Price = product.Price;
                productDTO.Description = product.Description;
                productDTO.Image1 = product.Image1;
                productDTO.Image2 = product.Image2;
                productDTO.Image3 = product.Image3;
                productDTO.CategoryName = product.Category.Name;
                return Ok(productDTO);
            }
            return BadRequest("Id is not valid");
        }

        [AllowAnonymous]
        [HttpGet("category/{categoryId}")]
        public async Task<IActionResult> getProductByCategoryId(int categoryId)
        {
            List<Product> products = context.Products.Include(c => c.Category).Where(p => p.CategoryId == categoryId).ToList();
           return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Product product)
        {

            if (ModelState.IsValid == true)
            {
                context.Products.Add(product);
                context.SaveChanges();
                return Ok("Saved");
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put([FromBody] Product product, [FromRoute] int id)
        {
            if (ModelState.IsValid == true)
            {
                Product oldProduct = context.Products.FirstOrDefault(x => x.Id == id);
                if (oldProduct != null)
                {
                    oldProduct.Name = product.Name;
                    oldProduct.Price = product.Price;
                    oldProduct.Description = product.Description;
                    oldProduct.Image1 = product.Image1;
                    oldProduct.Image2 = product.Image2;
                    oldProduct.Image3 = product.Image3;
                    oldProduct.CategoryId = product.CategoryId;
                    context.SaveChanges();
                    return StatusCode(204, "Saved");
                }
                return BadRequest("ID is not valid");
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            Product product = context.Products.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                try
                {
                    context.Products.Remove(product);
                    context.SaveChanges();
                    return StatusCode(204, "Record is removed");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return BadRequest("ID doesn't exist");
        }
    }
}

