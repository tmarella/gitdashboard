import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mvcstate',
  templateUrl: './mvcstate.component.html',
  styleUrls: ['./mvcstate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvcstateComponent implements OnInit {
  mvcCookie = `HttpCookie cookie = new HttpCookie("TestCookie");
  cookie.Value = "This is test cookie";
  this.ControllerContext.HttpContext.Response.Cookies.Add(cookie); `;
  viewData = `public ActionResult Index()
  {
      IList<Student> studentList = new List<Student>();
      studentList.Add(new Student(){ StudentName = "Bill" });
      studentList.Add(new Student(){ StudentName = "Steve" });
      studentList.Add(new Student(){ StudentName = "Ram" });

      ViewData["students"] = studentList;

      return View();
  }`;

  accessViewData = `<ul>
  @foreach (var std in ViewData["students"] as IList<Student>)
  {
      <li>
          @std.StudentName
      </li>
  }
  </ul>`;

  viewDataKeyValue = `// add a KeyValuePair into ViewData
  public ActionResult Index()
  {
      ViewData.Add("Id", 1);
      ViewData.Add(new KeyValuePair<string, object>("Name", "Bill"));
      ViewData.Add(new KeyValuePair<string, object>("Age", 20));

      return View();
  }`;

  viewBag = `namespace MVC_BasicTutorials.Controllers
  {
      public class StudentController : Controller
      {
          IList<Student> studentList = new List<Student>() {
                      new Student(){ StudentID=1, StudentName="Steve", Age = 21 },
                      new Student(){ StudentID=2, StudentName="Bill", Age = 25 },
                      new Student(){ StudentID=3, StudentName="Ram", Age = 20 },
                      new Student(){ StudentID=4, StudentName="Ron", Age = 31 },
                      new Student(){ StudentID=5, StudentName="Rob", Age = 19 }
                  };
          // GET: Student
          public ActionResult Index()
          {
              ViewBag.TotalStudents = studentList.Count();

              return View();
          }

      }
  }`;

  tempData = `public class HomeController : Controller
  {
      public HomeController()
      {

      }

      public ActionResult Index()
      {
          TempData["myData"] = "Test data";
          return View();
      }

      public ActionResult About()
      {
          string data;

          if(TempData["myData"] != null)
              data = TempData["myData"] as string;

          TempData.Keep();

          return View();
      }

      public ActionResult Contact()
      {
          string data;

          if(TempData["myData"] != null)
              data = TempData["myData"] as string;

          return View();
      }
  }`;

  constructor() { }

  ngOnInit(): void {
  }

}
