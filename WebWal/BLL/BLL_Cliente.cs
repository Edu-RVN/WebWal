using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebWal.DAL;
using WebWal.Models;

namespace WebWal.BLL
{
    public class BLL_Cliente
    {
        DAL_Cliente dalCad = new DAL_Cliente();
        public string CadastrarCliente(Cliente dados)
        {
            var ret = dalCad.CadastrarCliente(dados);

            return ret;
        } 
        public string ObterListaCliente()
        {
            var ret = dalCad.ObterListaClientes();

            return ret;
        }
    }
}