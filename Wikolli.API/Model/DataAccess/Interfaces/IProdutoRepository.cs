using System.Collections.Generic;
using Wikolli.API.Model.Entity;

namespace Wikolli.API.Model.DataAccess.Interfaces
{
    public interface IProdutoRepository
    {
        List<Produtos> ListaProdutos();
        List<Produtos> ListaProdutosGrupo(int grupo);
    }
}
