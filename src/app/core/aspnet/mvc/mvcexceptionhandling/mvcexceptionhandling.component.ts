import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mvcexceptionhandling',
  templateUrl: './mvcexceptionhandling.component.html',
  styleUrls: ['./mvcexceptionhandling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvcexceptionhandlingComponent implements OnInit {
  customErrors = `<system.web>
  <customErrors mode="On" defaultRedirect="~/ErrorHandler/Index">
      <error statusCode="404" redirect="~/ErrorHandler/NotFound"/>
  </customErrors>
<system.web/>`;

  sqlException = `[HandleError(ExceptionType = typeof(SqlException), View = "SqlExceptionView")]
public string GetClientInfo(string username)
{
	return "true";
}`;

  onException = `public class UserMvcController : Controller
{
   protected override void OnException(ExceptionContext filterContext)
   {
      filterContext.ExceptionHandled = true;

	  //Log the error!!
      _Logger.Error(filterContext.Exception);

      //Redirect or return a view, but not both.
      filterContext.Result = RedirectToAction("Index", "ErrorHandler");
      // OR
      filterContext.Result = new ViewResult
      {
         ViewName = "~/Views/ErrorHandler/Index.cshtml"
      };
   }
}`;

  applicationError = `public class MvcApplication : System.Web.HttpApplication
{
   protected void Application_Start()
   {
      AreaRegistration.RegisterAllAreas();
      FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
      RouteConfig.RegisterRoutes(RouteTable.Routes);
      BundleConfig.RegisterBundles(BundleTable.Bundles);
   }

   protected void Application_Error()
   {
      var ex = Server.GetLastError();
      //log the error!
      _Logger.Error(ex);
   }
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
