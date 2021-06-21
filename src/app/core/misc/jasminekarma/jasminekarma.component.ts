import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-jasminekarma',
  templateUrl: './jasminekarma.component.html',
  styleUrls: ['./jasminekarma.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JasminekarmaComponent implements OnInit {

  sampleTestBed = `import {TestBed, ComponentFixture} from '@angular/core/testing';
  import {LoginComponent} from './login.component';
  import {AuthService} from "./auth.service";

  describe('Component: Login', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>; (1)
    let authService: AuthService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [AuthService]
      });

      // create component and test fixture
      fixture = TestBed.createComponent(LoginComponent); (2)

      // get test component from the fixture
      component = fixture.componentInstance; (3)

      // UserService provided to the TestBed
      authService = TestBed.get(AuthService); (4)

    });
  });`

  constructor() { }

  ngOnInit(): void {
  }

}
