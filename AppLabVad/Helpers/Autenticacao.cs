using AppLabVad.Dao;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace AppLabVad.Helpers
{
    public class Autenticacao
    {
        public static Boolean ValidarUsuario(string login, string senha)
        {
            UsuarioDAO uDao = new UsuarioDAO();
            var CrpSenha = Cryptographer.HashMD5(senha);

            DataTable dtUser = uDao.VerificarLogin(login, CrpSenha);

            //Try-Catch que verifica e provê resultados de checagem de e-mail e senha no Banco de Dados.
            try
            {
                string email = dtUser.Rows[0]["email"].ToString();
                string senhaBD = dtUser.Rows[0]["senha"].ToString();

                if (email == login)
                {
                    if (senhaBD == CrpSenha)
                        return true;
                    else
                        return false;
                }
                else
                    return false;

            }
            catch (IndexOutOfRangeException)
            {
                return false;
            }
        }

        public static String ConsultarIdUsuario(string login)
        {
            UsuarioDAO uDao = new UsuarioDAO();
            //Lembrar de criar um método específico na classe DAO para consultar utilizando o Id em breve
            DataTable dtUser = uDao.ObterId(login);
            //Armazena o Id do usuário logado
            string userId = dtUser.Rows[0]["id"].ToString();

            return userId;
        }
    }
}