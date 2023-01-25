using AppLabVad.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace AppLabVad.Dao
{
    public class UsuarioDAO : Conexao
    {
        SqlCommand comando = null;

        public bool Salvar(UsuarioModel user)
        {
            bool resultado = false;

            try
            {
                //Define o comando em SQL
                string sql = "INSERT INTO Usuario(nome, email, instituicao, senha) VALUES (@nome, @email, @instituicao, @senha)";
                //Abre a conexão.
                AbrirConexao();
                //Cria um objeto do tipo comando, passando como parâmetros, a string de comando SQL e a string de conexão
                comando = new SqlCommand(sql, conexao);

                //Adicionando os valores das caixas de texto nos parametros de comando.
                comando.Parameters.Add(new SqlParameter("@nome", user.Nome));
                comando.Parameters.Add(new SqlParameter("@email", user.Email));
                comando.Parameters.Add(new SqlParameter("@instituicao", user.Instituicao));
                comando.Parameters.Add(new SqlParameter("@senha", user.Senha));

                //Executa o comando.
                comando.ExecuteNonQuery();
                resultado = true;
            }
            catch (Exception erro)
            {
                resultado = false;
                throw erro;
            }
            finally
            {
                //Fecha a conexão.
                FecharConexao();
            }
            return resultado;
        }

        public DataTable VerificarLogin(string login, string senha)
        {
            SqlDataReader reader = null;
            DataTable dt = new DataTable();

            try
            {
                //Define o comando em SQL
                string sql = "SELECT * FROM usuario WHERE ((email=@email)) and ((senha=@senha))";
                //Abre a conexão.
                AbrirConexao();
                //Cria um objeto do tipo comando, passando como parâmetros, a string de comando SQL e a string de conexão
                comando = new SqlCommand(sql, conexao);

                //Adicionando os valores das caixas de texto nos parametros de comando.
                comando.Parameters.Add(new SqlParameter("@email", login));
                comando.Parameters.Add(new SqlParameter("@senha", senha));

                //Executa o comando.
                reader = comando.ExecuteReader();
                //Guarda o resultado da consulta.
                dt.Load(reader);
            }
            catch (Exception erro)
            {
                dt = null;
                throw erro;
            }
            finally
            {
                //Fecha a conexão.
                FecharConexao();
            }
            return dt;
        }

        public DataTable ObterId(string login)
        {
            SqlDataReader reader = null;
            DataTable dt = new DataTable();

            try
            {
                //Define o comando em SQL
                string sql = "SELECT id FROM usuario WHERE ((email=@email))";
                //Abre a conexão.
                AbrirConexao();
                //Cria um objeto do tipo comando, passando como parâmetros, a string de comando SQL e a string de conexão
                comando = new SqlCommand(sql, conexao);

                //Adicionando os valores das caixas de texto nos parametros de comando.
                comando.Parameters.Add(new SqlParameter("@email", login));

                //Executa o comando.
                reader = comando.ExecuteReader();
                //Guarda o resultado da consulta.
                dt.Load(reader);
            }
            catch (Exception erro)
            {
                dt = null;
                throw erro;
            }
            finally
            {
                //Fecha a conexão.
                FecharConexao();
            }
            return dt;
        }

        public DataTable Consultar(string id)
        {
            SqlDataReader reader = null;
            DataTable dt = new DataTable();

            try
            {
                //Define o comando em SQL
                string sql = "SELECT * FROM usuario WHERE ((id=@id))";
                //Abre a conexão.
                AbrirConexao();
                //Cria um objeto do tipo comando, passando como parâmetros, a string de comando SQL e a string de conexão
                comando = new SqlCommand(sql, conexao);

                //Adicionando os valores das caixas de texto nos parametros de comando.
                comando.Parameters.Add(new SqlParameter("@id", id));

                //Executa o comando.
                reader = comando.ExecuteReader();
                //Guarda o resultado da consulta.
                dt.Load(reader);
            }
            catch (Exception erro)
            {
                dt = null;
                throw erro;
            }
            finally
            {
                //Fecha a conexão.
                FecharConexao();
            }
            return dt;
        }

        public bool Alterar(UsuarioModel user)
        {
            bool resultado = false;
            try
            {
                //Define o comando em SQL
                string sql = "";

                //Abre a conexão.
                AbrirConexao();

                //Cria um objeto do tipo comando, passando como parâmetros, a string de comando SQL e a string de conexão
                comando = new SqlCommand(sql, conexao);

                //Adicionando os valores das caixas de texto nos parametros de comando.
                comando.Parameters.Add(new SqlParameter("@nome", user.Nome));
                comando.Parameters.Add(new SqlParameter("@email", user.Email));
                comando.Parameters.Add(new SqlParameter("@instituicao", user.Instituicao));
                comando.Parameters.Add(new SqlParameter("@senha", user.Senha));

                //Execua o comando.
                comando.ExecuteNonQuery();
                resultado = true;
            }
            catch (Exception erro)
            {
                resultado = false;
                throw erro;
            }
            finally
            {
                //Fecha a conexão.
                FecharConexao();
            }
            return resultado;
        }

        public bool Excluir(UsuarioModel user)
        {
            bool resultado = false;
            try
            {
                //Define o comando em SQL
                string sql = "";

                //Abre a conexão.
                AbrirConexao();

                //Cria um objeto do tipo comando, passando como parâmetros, a string de comando SQL e a string de conexão
                comando = new SqlCommand(sql, conexao);

                //Adicionando os valores das caixas de texto nos parametros de comando.
                comando.Parameters.Add(new SqlParameter("@nome", user.Nome));
                comando.Parameters.Add(new SqlParameter("@email", user.Email));
                comando.Parameters.Add(new SqlParameter("@instituicao", user.Instituicao));
                comando.Parameters.Add(new SqlParameter("@senha", user.Senha));

                //Execua o comando.
                comando.ExecuteNonQuery();
                resultado = true;
            }
            catch (Exception erro)
            {
                resultado = false;
                throw erro;
            }
            finally
            {
                //Fecha a conexão.
                FecharConexao();
            }
            return resultado;
        }
    }
}