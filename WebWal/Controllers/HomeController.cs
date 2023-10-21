using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebWal.BLL;
using WebWal.Models;

namespace WebWal.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        } 
        public ActionResult Portfolio()
        {
            return View();
        }
         public ActionResult Blog()
        {
            
            return View();
        }
          public ActionResult Services()
        {           

            return View();
        }

        public ActionResult Customer()
        {

            return View();
        }
        public ActionResult CustomerNew()
        {

            return View();
        }
        
        public ActionResult CustomerAppointment()
        {

            return View();
        }


        //requisicoes http

        BLL_Cliente bllCad = new BLL_Cliente();
        [HttpPost]

        public ActionResult CadastrarCliente(Cliente dados)
        {
           
            var ret = bllCad.CadastrarCliente(dados);
                       
            return Json(new
            {
                retorno = ret
            });

        }
    }
}