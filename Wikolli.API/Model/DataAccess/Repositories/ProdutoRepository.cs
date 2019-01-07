using System.Collections.Generic;
using System.Linq;
using Wikolli.API.Model.DataAccess.Interfaces;
using Wikolli.API.Model.Entity;

namespace Wikolli.API.Model.DataAccess.Repositories
{
  public class ProdutoRepository : IProdutoRepository
  {
    private readonly MyDbContext _myDbContext;

    public ProdutoRepository(MyDbContext myDbContext)
    {
      _myDbContext = myDbContext;
    }


    public List<Produtos> ListaProdutos()
    {
      return _myDbContext.Produtos
  .Where(p => p.GRU_CODIGO != null)
  .Where(p => p.GRU_CODIGO != 0)
  .Where(p => p.GRU_CODIGO != 1)
  .Where(p => p.GRU_CODIGO != 2)
  .Where(p => p.GRU_CODIGO != 3)
  .Where(p => p.GRU_CODIGO != 11)
  .Where(p => p.GRU_CODIGO != 13)
  .Where(p => p.GRU_CODIGO != 21)
  .Where(p => p.GRU_CODIGO != 24).ToList();
    }

    public List<Produtos> ListaProdutosGrupo(int grupo)
    {
      return _myDbContext.Produtos.Where(p => p.GRU_CODIGO == grupo).ToList();
    }

    public List<Produtos> ListarProdutosDescricao(string descricao)
    {
      //return _myDbContext.Produtos.Where(p => p.PRO_DESCRICAO == descricao).ToList();
      var matches = from m in _myDbContext.Produtos
                    where m.PRO_DESCRICAO.Contains(descricao)
                    where m.GRU_CODIGO != null
                    where m.GRU_CODIGO != 0
                    where m.GRU_CODIGO != 1
                    where m.GRU_CODIGO != 2
                    where m.GRU_CODIGO != 3
                    where m.GRU_CODIGO != 11
                    where m.GRU_CODIGO != 13
                    where m.GRU_CODIGO != 21
                    where m.GRU_CODIGO != 24
                    select m;

      return matches.ToList();
    }
  }
}
