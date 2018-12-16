using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wikolli.API.Model.DataAccess.Interfaces;
using Wikolli.API.Model.Entity;

namespace Wikolli.API.Model.DataAccess.Repositories
{
  public class ComposicaoRepository : IComposicaoRepository
  {

    private readonly MyDbContext _myDbContext;

    public ComposicaoRepository(MyDbContext myDbContext)
    {
      _myDbContext = myDbContext;
    }

    public List<Composicao> ListaComposicaoPorCodigo(int codigo)
    {
      return _myDbContext.Composicao.Where(c => c.PRO_CODIGO == codigo).ToList();
    }

    public List<Composicao> ListarComposicoes()
    {
      return _myDbContext.Composicao.ToList();
    }
  }
}
