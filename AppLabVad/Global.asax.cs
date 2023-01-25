using AppLabVad.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;

namespace AppLabVad
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
        protected void Application_AuthenticateRequest(Object sender, EventArgs e)
        {
            var cookie = Context.Request.Cookies[FormsAuthentication.FormsCookieName];
            //Verifica se o usuário possui um cookie de acesso.
            if (cookie != null && cookie.Value != string.Empty)
            {
                FormsAuthenticationTicket ticket;
                try
                {
                    //Descriptografa o ticket no cookie.
                    ticket = FormsAuthentication.Decrypt(cookie.Value);
                }
                catch
                {
                    return;
                }

                var perfis = ticket.UserData.Split(';');

                if (Context.User != null)
                {
                    //Valida a autorização da solicitação do usuário.
                    Context.User = new GenericPrincipal(Context.User.Identity, perfis);
                }
            }
        }
    }
}
