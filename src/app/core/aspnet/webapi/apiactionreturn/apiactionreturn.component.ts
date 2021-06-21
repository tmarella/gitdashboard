import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-apiactionreturn',
  templateUrl: './apiactionreturn.component.html',
  styleUrls: ['./apiactionreturn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiactionreturnComponent implements OnInit {
  httpResponseMessage = `public HttpResponseMessage Get(int id)
  {
      Student stud = GetStudentFromDB(id);

      if (stud == null) {
          return Request.CreateResponse(HttpStatusCode.NotFound, id);
      }

      return Request.CreateResponse(HttpStatusCode.OK, stud);
  }`;

  ihttpActionResult = `public IHttpActionResult Get(int id)
  {
      Student stud = GetStudentFromDB(id);

      if (stud == null)
      {
          return NotFound();
      }

      return Ok(stud);
  }`;

  customResult = `public class TextResult : IHttpActionResult
  {
      string _value;
      HttpRequestMessage _request;

      public TextResult(string value, HttpRequestMessage request)
      {
          _value = value;
          _request = request;
      }

      public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
      {
          var response = new HttpResponseMessage()
          {
              Content = new StringContent(_value),
              RequestMessage = _request
          };
          return Task.FromResult(response);
      }
  }`;

  returnCustomResult = `public IHttpActionResult GetName(int id)
  {
      string name = GetStudentName(id);

      if (String.IsNullOrEmpty(name))
      {
          return NotFound();
      }

      return new TextResult(name, Request);
  }`;

  constructor() { }

  ngOnInit(): void {
  }

}
