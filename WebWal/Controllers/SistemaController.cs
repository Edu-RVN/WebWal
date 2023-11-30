using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebWal.BLL;
using WebWal.Models;

namespace WebWal.Controllers
{
    public class SistemaController : Controller
    {

        BLL_ItemNovo bllN = new BLL_ItemNovo();
        BLL_Cliente _bllCli = new BLL_Cliente();
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult NovosItens()
        {
            var user = (User)Session["USUARIO"];
            ViewBag.Usuario = user;
            return View();
        }


        [HttpPost]
        public JsonResult CadastrarAnamnese(Anamnese item)
        {
            var ret = bllN.CadastrarAnamnese(item);
                return Json(new
                {
                    retorno = "Erro"
                });
           

        }
        [HttpPost]
        public JsonResult CadastrarPonto(Ponto item)
        {
            var ret = bllN.CadastrarPonto(item);
                return Json(new
                {
                    retorno = "Erro"
                });
           

        }
        
        [HttpPost]
        public JsonResult ObterlistaAnamnese()
        {
            var ret = bllN.ObterListaAnamnese();
                return Json(new
                {
                    retorno = ret
                });
           

        }
        
        [HttpPost]
        public JsonResult ObterClientePorCpf(Cliente cli)
        {
            var ret = _bllCli.ObterClientePorCpf(cli);
                return Json(new
                {
                    retorno = ret
                });
           

        }


    }
}