using AppLabVad.Dao;
using AppLabVad.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AppLabVad.Controllers
{
    public class CadastroController : Controller
    {// preciso redirecionar essas actions para a view de login, focando o setor de cadastro.
        [AllowAnonymous]
        public ActionResult Cadastrar()
        {
            return PartialView();
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult Cadastrar(MetaModel cadastro, FormCollection form)
        {
            if (!ModelState.IsValid)
            {
                return View(cadastro);
            }
            if (cadastro.ModelRegister.SenhaCad != cadastro.ModelRegister.ConfSenCad)
            {
                //NOTA: MENSAGEM NÃO APARECE
                ModelState.AddModelError("senhaCad", "Os campos 'Senha' e 'Confirmação da senha' não estão iguais.");
                return View(cadastro);
            }

            UsuarioModel user = new UsuarioModel();

            user.Nome = form["nomeCad"];
            user.Email = form["emailCad"];
            user.Instituicao = form["instiCad"];
            user.Senha = form["senhaCad"];

            UsuarioDAO uDao = new UsuarioDAO();

            var enviar = uDao.Salvar(user);

            if (enviar)
            {
                return RedirectToAction("Home", "Home");
            }
            else
            {
                ModelState.AddModelError("", "Ocorreu um problema ao realizar o cadastro.");
            }

            return PartialView(cadastro);
        }
    }
}