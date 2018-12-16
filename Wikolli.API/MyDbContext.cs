using Microsoft.EntityFrameworkCore;
using Wikolli.API.Model.Entity;

namespace Wikolli.API
{
  public class MyDbContext : DbContext
  {
    public MyDbContext(DbContextOptions<MyDbContext> options)
        : base(options)
    {
    }
    public virtual DbSet<Produtos> Produtos { get; set; }
    public virtual DbSet<Composicao> Composicao { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Produtos>().HasKey(p => p.PRO_CODIGO);
      modelBuilder.Entity<Unidades>().HasKey(u => u.UND_CODIGO);
      modelBuilder.Entity<Grupos>().HasKey(g => g.GRU_CODIGO);
      modelBuilder.Entity<Composicao>().HasKey(c => c.COM_MATERIAPRIMA);
    }
  }
}
