import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mvcmodelbinding',
  templateUrl: './mvcmodelbinding.component.html',
  styleUrls: ['./mvcmodelbinding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvcmodelbindingComponent implements OnInit {

  httpGet = `[HttpGet]
  public ActionResult Contact(int id, string description)
  {
     ViewBag.Message = id.ToString() + description;
     return View();
  }`;

  httpPost = `public class DataModel
  {
     public int id { get; set; }
     public string description { get; set; }
  }

  public class HomeController : Controller
  {
     public void SubmitData(DataModel model)
     {

     }
  }`;

  bindAttribute = `public void SubmitData([Bind(Include = "description")]DataModel model)
  {
     //even if id property was provided, model binder will ignore it
  }

  public void SubmitData([Bind(Exclude= "id")]DataModel model)
{
   //even if id property was provided, model binder will ignore it
}`;

  customBinder = `public class PersonModelBinder : IModelBinder
{
    public object BindModel(ControllerContext controllerContext,
      ModelBindingContext bindingContext)
    {
        HttpRequestBase request = controllerContext.HttpContext.Request;

        int id = Convert.ToInt32(request.Form.Get("Id"));
        string first = request.Form.Get("FirstName");
        string middle = request.Form.Get("MiddleName");
        string last = request.Form.Get("LastName");


        return new PersonModel()
        {
            Id = id,
            FullName = string.Concat(first, middle, last)
        };
    }
}`;

  applicationStart = `protected void Application_Start()
{
    ModelBinders.Binders.Add(typeof(PersonModel), new PersonModelBinder());
}`;

  attributeControllerAction = `[HttpPost]
public ActionResult Create([ModelBinder(typeof(PersonModelBinder))]PersonModel person)
{
    ...
    return RedirectToAction("Index");
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
