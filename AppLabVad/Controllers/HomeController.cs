using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using AppLabVad.Dao;
using AppLabVad.Helpers;
using AppLabVad.Models;

namespace AppLabVad.Controllers
{
    [Authorize(Roles = "Usuario")]
    public class HomeController : Controller
    {
        
        public ActionResult Home()
        {
            ViewBag.Title = "LabVad - Unigranrio";

            return View();
        }

        public ActionResult Ajuda()
        {
            return PartialView();
        }

        public ActionResult Agendamento()
        {
            return PartialView();
        }

        public ActionResult AgendDia()
        {
            return PartialView();
        }

        public ActionResult Execucao()
        {
            return PartialView();
        }

        public ActionResult MinhaConta()
        {
            //Recebe o Perfil do usuário
            var usuario = (Perfil)Session["Perfil"];

            //Faz uma consulta ao Banco de Dados pelas informações do Usuário
            //DataTable userInfos = Perfil.ConsultarUserInfo(usuario);

            //Envia as informações do usuário para a view
            //ViewBag.Nome = userInfos.Rows[0]["Nome"].ToString();
            //ViewBag.Email = userInfos.Rows[0]["Email"].ToString();
            //ViewBag.Instituicao = userInfos.Rows[0]["Instituicao"].ToString();
            //ViewBag.Senha = userInfos.Rows[0]["Senha"].ToString();

            ViewBag.Nome = "Miguel";
            ViewBag.Email = "MiguelEmail";
            ViewBag.Instituicao = "Unigranrio";

            return PartialView();
        }

        public ActionResult Logoff()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Conta");
        }
    }
}
