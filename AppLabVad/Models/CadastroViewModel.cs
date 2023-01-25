using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AppLabVad.Models
{
    public class CadastroViewModel
    {
        [Required(ErrorMessage = "O nome é obrigatório")]
        [Display(Name = "*Nome:")]
        public string NomeCad { get; set; }

        [Required(ErrorMessage = "O e-mail é obrigatório")]
        [Display(Name = "*E-mail:")]
        public string EmailCad { get; set; }

        [Display(Name = "Instituição:")]
        public string InstiCad { get; set; }

        [Required(ErrorMessage = "A senha é obrigatória")]
        [Display(Name = "*Senha:")]
        [DataType(DataType.Password)]
        public string SenhaCad { get; set; }

        [Required(ErrorMessage = "A confirmação da senha é obrigatória")]
        [Display(Name = "*Confirmação da senha:")]
        [DataType(DataType.Password)]
        public string ConfSenCad { get; set; }
    }
}