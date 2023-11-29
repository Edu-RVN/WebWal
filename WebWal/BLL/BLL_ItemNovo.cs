using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebWal.DAL;
using WebWal.Models;

namespace WebWal.BLL
{
    public class BLL_ItemNovo
    {

        DAL_NovoItem dalitem = new DAL_NovoItem();
        public string CadastrarAnamnese(Anamnese item)
        {
            var ret = dalitem.CadastrarAnamnese(item);

            return ret;
        }

        public string CadastrarPonto(Ponto item)
        {
            var ret = dalitem.CadastrarPonto(item);

            return ret;
        }
        public string ObterListaPontos()
        {
            var ret = dalitem.ObterListaPontos();

            return ret;
        }
        public string ObterListaAnamnese()
        {
            var ret = dalitem.ObterListaAnamnese();

            return ret;
        }


    }
}