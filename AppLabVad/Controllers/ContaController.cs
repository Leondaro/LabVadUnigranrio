using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using AppLabVad.Dao;
using AppLabVad.Helpers;
using AppLabVad.Models;

namespace AppLabVad.Controllers
{
    public class ContaController : Controller
    {
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View("Login");
        }

        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl; 
            ViewBag.Title = "LabVad - Unigranrio";

            MetaModel model = new MetaModel()
            {
                ModelLogin = new LoginViewModel()
            };
            model.ModelLogin.EmailLog = "Visitante@email";
            model.ModelLogin.SenhaLog = "visitante";

            return View(model);
        }

        //Faz a chamada de validação de Login
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Login(MetaModel login, string returnUrl)
        {
            if (!ModelState.IsValid)
            {
                return View(login);
            }
            //Faz a autenticacao do usuário.
            //if (Autenticacao.ValidarUsuario(login.ModelLogin.EmailLog, login.ModelLogin.SenhaLog))
            if (true)
            {
                //Obtem o valor de Id do usuário autenticado.
                //string userId = Autenticacao.ConsultarIdUsuario(login.ModelLogin.EmailLog);
                string userId = "01";

                //O perfil de acesso é criado e recebe a sua autorização adequada.
                //Perfil oPerfil = new Perfil(login.ModelLogin.EmailLog, userId);
                Perfil oPerfil = new Perfil(login.ModelLogin.EmailLog, userId);

                //Guarda o objeto Perfil do usuário na variável de sessão.
                Session["Perfil"] = oPerfil;
                //Talvez eu possa adicionar por aqui o nível de autorização do usuário, através do objeto de perfil.
                //Cria um ticket e o criptografa, com informações de acesso do usuário.
                var ticket = FormsAuthentication.Encrypt(new FormsAuthenticationTicket(1, login.ModelLogin.EmailLog, DateTime.Now,
                    DateTime.Now.AddDays(1), login.ModelLogin.LembrarMe, "Usuario"));
                
                //Cria um cookie para guardar o ticket.
                var cookie = new HttpCookie(FormsAuthentication.FormsCookieName, ticket);

                //Envia o ticket para o usuário.
                Response.Cookies.Add(cookie);

                if(!string.IsNullOrEmpty(returnUrl) 
                   && Url.IsLocalUrl(returnUrl)
                   && returnUrl.Length > 1)
                {
                    return Redirect(returnUrl);
                }
                else
                {
                    return RedirectToAction("Home", "Home");
                }
            }
            else
            {
                //Envia a mensagem de erro para o sumário de validação do login.
                ModelState.AddModelError("", "Usuário de login ou senha inválidos");
            }

            return View(login);
        }
    }
}