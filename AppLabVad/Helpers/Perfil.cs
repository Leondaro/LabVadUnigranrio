using AppLabVad.Dao;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AppLabVad.Helpers
{
    public class Perfil
    {
        private string Usuario { get; set; }
        private string Id { get; set; }
        public string[] Roles;

        public Perfil(string pUsuario, string idUsuario)
        {
            this.Usuario = pUsuario;
            this.Id = idUsuario;
            //Especifica qual o nível de permissão do usuário.
            if (Usuario == "Adm")
            {
                this.Roles = new string[] { "Administrador", "Usuario"};
            }
            else
            {
                this.Roles = new string[] { "Usuario" };
            }
        }

        public static DataTable ConsultarUserInfo(Perfil oPerfil)
        {
            UsuarioDAO uDao = new UsuarioDAO();

            DataTable dtUser = uDao.Consultar(oPerfil.Id);

            return dtUser;
        }
    }
}