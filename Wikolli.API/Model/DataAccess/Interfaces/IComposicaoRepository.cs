using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wikolli.API.Model.Entity;

namespace Wikolli.API.Model.DataAccess.Interfaces
{
  public interface IComposicaoRepository
  {
    List<Composicao> ListarComposicoes();
    List<Composicao> ListaComposicaoPorCodigo(int codigo);
  }
}
