import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-apirouting',
  templateUrl: './apirouting.component.html',
  styleUrls: ['./apirouting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiroutingComponent implements OnInit {
  addRoute = `public static class WebApiConfig
  {
      public static void Register(HttpConfiguration config)
      {
          config.MapHttpAttributeRoutes();

          // define route
          IHttpRoute defaultRoute = config.Routes.CreateRoute("api/{controller}/{id}",
                                              new { id = RouteParameter.Optional }, null);

          // Add route
          config.Routes.Add("DefaultApi", defaultRoute);

      }
  }`;
  addMultipleRoutes = `public static class WebApiConfig
  {
                  public static void Register(HttpConfiguration config)
      {
          config.MapHttpAttributeRoutes();

                  // school route
          config.Routes.MapHttpRoute(
              name: "School",
              routeTemplate: "api/myschool/{id}",
              defaults: new { controller="school", id = RouteParameter.Optional }
              constraints: new { id ="/d+" }
          );

                  // default route
          config.Routes.MapHttpRoute(
              name: "DefaultApi",
              routeTemplate: "api/{controller}/{id}",
              defaults: new { id = RouteParameter.Optional }
          );
      }
  }`;

  attributeRoute = `public class StudentController : ApiController
  {
      [Route("api/student/names")]
                  public IEnumerable<string> Get()
      {
                  return new string[] { "student1", "student2" };
      }
  }`;

  constructor() { }

  ngOnInit(): void {
  }

}
