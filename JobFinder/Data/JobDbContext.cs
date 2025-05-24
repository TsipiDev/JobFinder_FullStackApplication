using JobFinder.Models;
using Microsoft.EntityFrameworkCore;

namespace JobFinder.Data
{
    public class JobDbContext : DbContext
    {
        public JobDbContext(DbContextOptions<JobDbContext> options) : base(options)
        {
        }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Employer> Employers { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Job>()
                .Property(b => b.Category)
                .HasConversion<string>();

            modelBuilder.Entity<Job>()
                .Property(b => b.Hours)
                .HasConversion<string>();

            modelBuilder.Entity<Job>()
                .Property(b => b.Type)
                .HasConversion<string>();
        }

    }
}
