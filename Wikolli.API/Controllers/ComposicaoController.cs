using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Wikolli.API.Model.DataAccess.Interfaces;

namespace Wikolli.API.Controllers
{
  [Route("api/[Controller]")]

  public class ComposicaoController : Controller
  {
    private readonly IComposicaoRepository _composicaoRepository;

    public ComposicaoController(IComposicaoRepository composicaoRepository)
    {
      _composicaoRepository = composicaoRepository;
    }

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        return Ok(_composicaoRepository.ListarComposicoes());
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpGet("{id:int}")]
    public IActionResult GetById(int id)
    {
      try
      {
        return Ok(_composicaoRepository.ListaComposicaoPorCodigo(id));
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
