import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-anghttp',
  templateUrl: './anghttp.component.html',
  styleUrls: ['./anghttp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnghttpComponent implements OnInit {
  getAny = `this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
  this.totalAngularPackages = data.total;
  })`;
  postAny = `this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
    this.postId = data.id;
})`;
  getStrong = `interface SearchResults {
    total: number;
    results: Array<object>;
}
this.http.get<SearchResults>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    this.totalAngularPackages = data.total;
})`;
  postStrong = `interface Article {
    id: number;
    title: string;
}

this.http.post<Article>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
    this.postId = data.id;
})`;
  getError = `this.http.get<any>('https://api.npms.io/v2/invalid-url').subscribe(
    data => this.totalAngularPackages = data.total,
    error => console.error('There was an error!', error)
)`;
  postError = `this.http.post('https://jsonplaceholder.typicode.com/invalid-url', { title: 'Angular POST Request Example' }).subscribe({
    next: data => this.postId = data.id,
    error: error => console.error('There was an error!', error)
})`;
  getHeaders = `const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
  this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular', { headers }).subscribe(data => {
      this.totalAngularPackages = data.total;
  })`;
  postHeaders = `const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
  const body = { title: 'Angular POST Request Example' }
  this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body, { headers }).subscribe(data => {
      this.postId = data.id;
  })`;

  postFileandJson = ` // Validates file
  validateFile(fileItem: File, validationRequest?: object): any {
    const serverWithApiURL = this.sfgEnvironmentsService.get().serverURL + '/validateFile';
    const formData: FormData = new FormData();
    formData.append('file', fileItem, fileItem.name);
    formData.append('validationRequest', JSON.stringify(validationRequest));
    if (validationRequest) {
      for (const key in validationRequest) {
        if (key.length > 0) {
          formData.append(key, validationRequest[key]);
          // this.logger.debug('formData = ' + formData);
        }
      }
    }

    return this.http.post(serverWithApiURL, formData, {
      observe: 'response',
      reportProgress: true,
      responseType: 'json'
    }).pipe(
      retry(3), // retry a failed request up to 3 additional times
      catchError(this.handleError) // then handle the error
    );
  }`;

  getObservableHttp = `  //service file

  getPolicies(): Observable<HttpResponse<Policies> {
    const serviceURL = this.sfgEnvironmentsService.get().serverURL;
    let endpoint = '/api/policy/GetPolicies/';
    const finalServiceURL = serviceURL + endpoint;
    return this.http.get<Policies>(finalServiceURL, { observe: 'response' });
  }

  // component

  getPolicies() {
    this.accountsListService
      .getPolicies()
      .subscribe(
        resp => {
          this.responseStatusCode = resp.status;
          this.policies = resp.body;
        },
        err => {
          this.responseStatusCode = err.status;
        }
      }
  `;

  postObservableHttp = ` //service file
  createNotification(request?: <any type>): Observable<HttpResponse<CreateModel> {
    const endpoint = '/api/news/bulletin/add';
    const serviceURL = this.sfgEnvironmentsService.get().serverURL + endpoint;
    return this.http.post<CreateModel>(serviceURL, request, { observe: 'response' });
  }`;

  promise = ` //service file

  getEmployeeByCode(empCode: string): Promise<IEmployee> {
    return this._http.get("http://localhost:31324/api/employees/" + empCode)
        .map((response: Response) => <IEmployee>response.json())
        .toPromise()
        .catch(this.handlePromiseError);
}

  //component file

  this._employeeService.getEmployeeByCode(empCode)
  .then((employeeData) => {
      if (employeeData == null) {
          this.statusMessage =
              'Employee with the specified Employee Code does not exist';
      }
      else {
          this.employee = employeeData;
      }
  },
  (error) => {
      this.statusMessage =
          'Problem with the service. Please try again after sometime';
      console.error(error);
  });
  `;

  manipulateURL = `// clone request and replace 'http://' with 'https://' at the same time
  const httpsReq = req.clone({
    url: req.url.replace("http://", "https://")
  });

  return next.handle(httpsReq);`;

  loader = `const loaderService = this.injector.get(LoaderService);

  loaderService.show();

  return next.handle(req).pipe(
    delay(5000),
    finalize(() => loaderService.hide())
  );`;

  pascaltocamel = `return next.handle(req).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        let camelCaseObject = mapKeys(event.body, (v, k) => camelCase(k));
        const modEvent = event.clone({ body: camelCaseObject });

        return modEvent;
      }
    })
  );`;

  headers = `const modified = req.clone({
    setHeaders: { "X-Man": "Wolverine" }
  });return next.handle(modified);`;

  fakebackend = `const body = {
    firstName: "Mock",
    lastName: "Faker"
  };return of(new HttpResponse(
    { status: 200, body: body }
  ));`;

  constructor() { }

  ngOnInit(): void {
  }

  Scroll(el: HTMLElement): void {
    el.scrollIntoView();
    el.style.display = 'inline';
    el.style.backgroundColor = 'lightyellow';
  }
}
