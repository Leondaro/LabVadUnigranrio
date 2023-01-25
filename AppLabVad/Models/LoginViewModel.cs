using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AppLabVad.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o usuário")]
        [Display(Name = "Usuário:")]
        public string EmailLog { get; set; }

        [Required(ErrorMessage = "Informe a senha")]
        [DataType(DataType.Password)]
        [Display(Name = "Senha:")]
        public string SenhaLog { get; set; }

        [Display(Name = "Lembrar-me:")]
        public bool LembrarMe { get; set; }
    }
}