using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebWal.BLL;
using WebWal.Models;

namespace WebWal.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMongoCollection<ClienteCompleto> _collection;

        public HomeController()
        {
            // Conexão com o banco MongoDB
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("BANCOWEBWAL");
            _collection = database.GetCollection<ClienteCompleto>("clienteCompleto");
        }

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

        public ActionResult CustomerComplete()
        {
            var cliente = _collection.Find(new BsonDocument()).ToList<ClienteCompleto>();
            var i = cliente.Count;

            ViewBag.ultimo = cliente[i - 1];
            return View(cliente);

        }
        public ActionResult CustomerAppointment()
        {

            return View();
        }
        public ActionResult LoginLim()
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

        [HttpPost]
        public ActionResult ObterListaCliente()
        {
           
            var ret = bllCad.ObterListaCliente();
                       
            return Json(new
            {
                retorno = ret
            });

        }

        ///teste de imagem
        ObjectId idInserido = new ObjectId();
        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase file, string Nome, string Cep, string Endereco, string Cidade, string DataNascimento, string Email, string Celular, string Cpf, string Rg, string Motivo)
        {
            //Guard.IsBetween(Convert.ToInt32(ano), 2020, 2023);

            if (file != null && file.ContentLength > 0)
            {
                // Lê a imagem como um array de bytes
                byte[] imageBytes;
                using (var memoryStream = new MemoryStream())
                {
                    file.InputStream.CopyTo(memoryStream);
                    imageBytes = memoryStream.ToArray();
                }

                // Cria um objeto MyImageModel para inserir no banco
                var cliente = new ClienteCompleto
                {
                    Nome = Nome,
                    Cep = Cep,
                    Endereco = Endereco,
                    Cidade = Cidade,
                    DataNascimento = Convert.ToDateTime(DataNascimento),
                    DataCadastro = DateTime.Now,
                    Email = Email,
                    Celular = Celular,
                    Cpf = Cpf,
                    Rg =Rg,
                    Flag = "1",
                    MotivoVisita = Motivo,
                    Data = new MongoDB.Bson.BsonBinaryData(imageBytes)
                };

                // Insere o modelo no banco
                _collection.InsertOne(cliente);

                idInserido = cliente.Id;

                Session["ULTIMOCAD"] = idInserido;
            }

            return RedirectToAction("CustomerComplete");
        }

        public ActionResult ShowImage(string id)
        {
            // Obtém a imagem com o ID especificado
            var image = _collection.Find(x => x.Id == ObjectId.Parse(id)).FirstOrDefault();

            if (image != null)
            {
                // Cria um objeto FileContentResult para exibir a imagem
                return new FileContentResult((byte[])image.Data, "image/jpeg");
            }

            return HttpNotFound();
        }

    }
}