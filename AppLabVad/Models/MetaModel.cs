using AppLabVad.Dao;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace AppLabVad.Models
{
    public class MetaModel
    {
        public LoginViewModel ModelLogin { get; set; }
        public CadastroViewModel ModelRegister { get; set; }
    }
}