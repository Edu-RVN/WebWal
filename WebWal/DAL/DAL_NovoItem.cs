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
    public class DAL_NovoItem
    {

        public string CadastrarAnamnese(Anamnese item)
        {

            try
            {
                string conexaoMongoDB = ConfigurationManager.ConnectionStrings["conexaoMongo"].ConnectionString;
                var client = new MongoClient(conexaoMongoDB);
                var db = client.GetDatabase("BANCOWEBWAL");
                IMongoCollection<Anamnese> colecao = db.GetCollection<Anamnese>("BaseAnamnese");
                colecao.InsertOne(item);

                return "Cadastro realizado com sucesso";
            }
            catch (Exception ex)
            {
                return "Erro na inserção dos dados";
                throw new Exception("Erro no acesso ao Baanco de dados", ex);
            }

        }

        public string CadastrarPonto(Ponto item)
        {

            try
            {
                string conexaoMongoDB = ConfigurationManager.ConnectionStrings["conexaoMongo"].ConnectionString;
                var client = new MongoClient(conexaoMongoDB);
                var db = client.GetDatabase("BANCOWEBWAL");
                IMongoCollection<Ponto> colecao = db.GetCollection<Ponto>("BasePontoAplicacao");
                colecao.InsertOne(item);

                return "Cadastro realizado com sucesso";
            }
            catch (Exception ex)
            {
                return "Erro na inserção dos dados";
                throw new Exception("Erro no acesso ao Baanco de dados", ex);
            }

        }

        public string ObterListaAnamnese()
        {
            try
            {
                string conexaoMongoDB = ConfigurationManager.ConnectionStrings["conexaoMongo"].ConnectionString;
                var client = new MongoClient(conexaoMongoDB);
                var db = client.GetDatabase("BANCOWEBWAL");
                IMongoCollection<Anamnese> colecao = db.GetCollection<Anamnese>("BaseAnamnese");
                var filtro = Builders<Anamnese>.Filter.Where(x => x.Flag == "1");
                var result = colecao.Find<Anamnese>(filtro).ToList<Anamnese>();

                string jsonClientes = JsonConvert.SerializeObject(result, Formatting.None);
                return jsonClientes;
            }
            catch (Exception ex)
            {
                return null;
                throw new Exception("Usuario nao existe no  Banco de dados", ex);
            }
        }

        public string ObterListaPontos()
        {
            try
            {
                string conexaoMongoDB = ConfigurationManager.ConnectionStrings["conexaoMongo"].ConnectionString;
                var client = new MongoClient(conexaoMongoDB);
                var db = client.GetDatabase("BANCOWEBWAL");
                IMongoCollection<Ponto> colecao = db.GetCollection<Ponto>("BasePontoAplicacao");
                var filtro = Builders<Ponto>.Filter.Where(x => x.Flag == "1");
                var result = colecao.Find<Ponto>(filtro).ToList<Ponto>();

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