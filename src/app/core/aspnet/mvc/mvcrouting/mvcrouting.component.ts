import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mvcrouting',
  templateUrl: './mvcrouting.component.html',
  styleUrls: ['./mvcrouting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvcroutingComponent implements OnInit {
  conventionRouting = `routes.MapRoute(
    name: "Default",
    url: "{controller}/{action}/{id}",
    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
);`;

  conventionRoutingConstraints = `routes.MapRoute(
  name: "Student",
  url: "student/{id}/{name}/{standardId}",
  defaults: new { controller = "Student", action = "Index", id = UrlParameter.Optional,
  name = UrlParameter.Optional, standardId = UrlParameter.Optional },
  constraints: new { id = @"\d+" }
);`;

  conventionRoutingMultipleConstraints = `routes.MapRoute(
  name: "Student",
  url: "students/{id}",
  defaults: new { controller = "Student", action = "Index"}
);

routes.MapRoute(
  name: "Default",
  url: "{controller}/{action}/{id}",
  defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
);`;

  attributeRouting = `public class HomeController : Controller
{
	[Route("Users/Index")] //Route: /Users/Index
    public ActionResult Index() { ... }
}`;

  attributeRoutingParameters = `[Route("Users/{id}")] //Route: /Users/12
public ActionResult Details(int id) { ... }
`;

  attributeRoutingOptionalParameters = `[Route("Users/{id}/{name?}")] //Route: /Users/12/Matthew-Jones or /Users/12
public ActionResult Details(int id, string name) { ... }
`;

  attributeRoutingParametersConstraint = `[Route("Users/{id:int}")] //Route: /Users/12
public ActionResult Details(int id) { ... }`;

  attributeRoutingRoutePrefix = `[RoutePrefix("Users")]
public class HomeController : Controller
{
    [Route("{id}")] //Route: /Users/12
    public ActionResult Details(int id) { ... }
}
`;

  attributeRoutingRoutePrefixOverride = `[RoutePrefix("Users")]
public class HomeController : Controller
{
    [HttpGet]
    [Route("~/special")] //Route: /special
    public ActionResult Special() { ... }
}
`;

  attributeRoutingRoutePrefixDefault = `[RoutePrefix("Users")]
public class HomeController : Controller
{
    [Route("~/")] //Specifies that this is the default action for the entire application. Route: /
    [Route("")] //Specifies that this is the default action for this route prefix. Route: /Users
    public ActionResult Index() { ... }
}
`;

  attributeRoutingRoutePrefixDefaultInput = `[RoutePrefix("Users")]
[Route("{action=index}")] //Specifies the Index action as default for this route prefix
public class HomeController : Controller
{
    public ActionResult Index()
    {
        return View();
    }
}
`;
  attributeRoutingRoutePrefixNamesOrder = `[RoutePrefix("Users")]
public class HomeController : Controller
{
    [Route("Index", Name = "UsersIndex", Order = 2)]
    public ActionResult Index() { ... }

    [Route("{id}", Name = "UserDetails", Order = 1)]
    public ActionResult Details(int id) { ... }
}
`;


  constructor() { }

  ngOnInit(): void {
  }

}
