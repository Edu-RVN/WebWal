using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebWal.Models
{
    public class User
    {
        public string Nome { get; set; }
        public string Senha { get; set; }
    }

    public class Anamnese
    {
        [BsonId]
        public ObjectId _id { get; set; }
        public string Nome { get; set; }
        public string Flag { get; set; }
    }

    public class Ponto
    {
        [BsonId]
        public ObjectId _id { get; set; }
        public string Nome { get; set; }
        public string Flag { get; set; }
    }
}