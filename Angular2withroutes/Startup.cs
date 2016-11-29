using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular2withroutes.Startup))]
namespace Angular2withroutes
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
