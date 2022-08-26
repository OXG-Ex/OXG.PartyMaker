using Microsoft.EntityFrameworkCore;

namespace OXG.PartyMaker.Models
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<IdentityUser> IdentityUsers { get; set; }

        public DbSet<Event> Events { get; set; }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
