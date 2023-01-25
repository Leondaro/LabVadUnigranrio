using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace AppLabVad.Helpers
{
    public class Cryptographer
    {
        public static string HashMD5(string value)
        {
            var bytes = Encoding.ASCII.GetBytes(value);
            var md5 = MD5.Create();
            var hash = md5.ComputeHash(bytes);

            var ret = string.Empty;

            for (int i = 0; i < hash.Length; i++)
            {
                ret += hash[i].ToString("x2");
            }

            return ret;
        }
    }
}