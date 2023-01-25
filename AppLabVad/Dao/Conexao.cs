using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace AppLabVad.Dao
{
    public class Conexao
    {
        string stringConexao = @"Server=DEATHMACHINEV\SQLEXPRESS;Database=LabVad;User Id = admin; Password=admin;";
        protected SqlConnection conexao = null;

        //Método para abrir conexão com o Banco de Dados.
        public void AbrirConexao()
        {
            try
            {
                conexao = new SqlConnection(stringConexao);
                conexao.Open();
            }
            catch (Exception erro)
            {
                throw erro;
            }
        }

        //Método para fechar conexão com o Banco de Dados.
        public void FecharConexao()
        {
            try
            {
                conexao = new SqlConnection(stringConexao);
                conexao.Close();
            }
            catch (Exception erro)
            {
                throw erro;
            }
        }
    }
}
