import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-angtemplateforms',
  templateUrl: './angtemplateforms.component.html',
  styleUrls: ['./angtemplateforms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngtemplateformsComponent implements OnInit {

  registrationForm = `<form #newUserForm="ngForm" (ngSubmit)="onSubmit(newUserForm)">

  <input type="text" placeholder="User name"
         required maxlength="25"
         [(ngModel)]="userName" name="userName"
         #pickedName="ngModel">
  <div *ngIf="!pickedName.valid && pickedName.touched">
    User name is required!
  </div>

  <input type="email" placeholder="Email"
         required [(ngModel)]="email"
         name="email" #userEmail="ngModel">
  <div *ngIf="!userEmail.valid && userEmail.touched">
    Email is required!
  </div>

  <input type="text" placeholder="Nick name"
         [(ngModel)]="nickName" name="nickName">

  <input type="password" placeholder="Password" required
         [(ngModel)]="password" name="password"
         #userPassword="ngModel">
  <div *ngIf="!userPassword.valid && userPassword.touched">
    Password is required!
  </div>


  <button type="submit" [disabled]="!newUserForm.form.valid">
    Register
  </button>

  <button type="button" (click)="newUserForm.reset()">
    Reset
  </button>

</form>`;

  stateForm = `{{ newUserForm.form.value | json }} <!-- Value of whole form -->
User name: {{ pickedName.value }} <!-- Value of userName field -->
Valid form? {{ newUserForm.form.valid | json }} <!-- Validity of whole form -->`;

  componentClass = `import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({ ... })
export class AppComponent {
  userName = 'Bob';
  email: string;
  nickName: string;
  password: string;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }
  }
}`;

  css = `.ng-invalid.ng-touched:not(form) {
  border: 2px solid red;
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
