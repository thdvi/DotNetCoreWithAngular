using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi
{
    public class WebApiContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"data source=THDVI;initial catalog= TestCore;Trusted_Connection=True;multipleactiveresultsets=True");
        }
    }
}
