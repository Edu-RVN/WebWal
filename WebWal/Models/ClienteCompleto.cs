using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace WebWal.Models
{
    public class ClienteCompleto
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Nome { get; set; }
        public string Cep { get; set; }
        public string Endereco { get; set; }
        public string Cidade { get; set; }
        public DateTime DataNascimento { get; set; }
        public DateTime DataCadastro { get; set; }
        public string Email { get; set; }
        public string Celular { get; set; }
        public string Cpf { get; set; }
        public string Rg { get; set; }
        public string Flag { get; set; }
        public string MotivoVisita { get; set; }


        public BsonBinaryData Data { get; set; }




    }
}