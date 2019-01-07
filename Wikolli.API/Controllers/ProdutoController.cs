using Microsoft.AspNetCore.Mvc;
using System;
using Wikolli.API.Model.DataAccess.Interfaces;

namespace Wikolli.API.Controllers
{
  [Route("api/[Controller]/")]
  public class ProdutoController : Controller
  {
    private readonly IProdutoRepository _produtoRepository;

    public ProdutoController(IProdutoRepository produtoRepository)
    {
      _produtoRepository = produtoRepository;
    }

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        return Ok(_produtoRepository.ListaProdutos());
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);
      }
    }

    [HttpGet("{grupo:int}")]
    public IActionResult GetByGroup(int grupo)
    {
      try
      {
        return Ok(_produtoRepository.ListaProdutosGrupo(grupo));
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);
      }
    }

    [HttpGet("pro_descricao/{descricao}")]
    public IActionResult GetByDescription(string descricao)
    {
      try
      {
        return Ok(_produtoRepository.ListarProdutosDescricao(descricao));
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


  }
}
