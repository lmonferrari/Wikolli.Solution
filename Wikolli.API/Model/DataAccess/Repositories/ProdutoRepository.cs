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
            return _myDbContext.Produtos.ToList();
        }

        public List<Produtos> ListaProdutosGrupo(int grupo)
        {
            return _myDbContext.Produtos.Where(p => p.GRU_CODIGO == grupo).ToList();
        }
    }
}
