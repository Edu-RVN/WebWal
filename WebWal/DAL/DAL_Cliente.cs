using MongoDB.Driver;
using Newtonsoft.Json;
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

        public string ObterListaClientes()
        {
            try
            {
                string conexaoMongoDB = ConfigurationManager.ConnectionStrings["conexaoMongo"].ConnectionString;
                var client = new MongoClient(conexaoMongoDB);
                var db = client.GetDatabase("BANCOWEBWAL");
                IMongoCollection<Cliente> colecao = db.GetCollection<Cliente>("cliente");
                var filtro = Builders<Cliente>.Filter.Where(x => x.Flag == "1");
                var result = colecao.Find<Cliente>(filtro).ToList<Cliente>();

                string jsonClientes = JsonConvert.SerializeObject(result, Formatting.None);
                return jsonClientes;
            }
            catch (Exception ex)
            {
                return null;
                throw new Exception("Usuario nao existe no  Banco de dados", ex);
            }
        }
    }
}