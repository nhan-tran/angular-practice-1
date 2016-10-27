using System.Web.Mvc;

namespace Angular.Controllers
{
	[Authorize]
    public class AccountController : Controller
    {
        // GET: Account
		[AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }
    }
}