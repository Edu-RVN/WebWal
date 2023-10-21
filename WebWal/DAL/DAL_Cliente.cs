using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using WebWal.Models;

namespace WebWal.DAL
{
    public class DAL_Cliente
    {
        public string CadastrarCliente(Cliente dados)
        {

            try
            {
                string conexaoMongoDB = ConfigurationManager.ConnectionStrings["conexaoMongo"].ConnectionString;
                var client = new MongoClient(conexaoMongoDB);
                var db = client.GetDatabase("BANCOWEBWAL");
                IMongoCollection<Cliente> colecao = db.GetCollection<Cliente>("cliente");
                colecao.InsertOne(dados);

                return "Cadastro realizado com sucesso";
            }
            catch (Exception ex)
            {
                return "Erro na inserção dos dados";
                throw new Exception("Erro no acesso ao Baanco de dados", ex);
            }


        }
    }
}