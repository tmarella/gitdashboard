import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-angreactiveforms',
  templateUrl: './angreactiveforms.component.html',
  styleUrls: ['./angreactiveforms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngreactiveformsComponent implements OnInit {
  reactiveForm = `<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <p>
      <label>First Name:</label>
      <input type="text" formControlName="firstName">
      <div *ngIf="form.get('name').hasError('required')">
      Oops, please provide a name!
      </div>
  </p>
  <p>
      <label>Password:</label>
      <input type="password" formControlName="password">
  </p>
  <p>
      <label>Email:</label>
      <input type="email" formControlName="email">
      <div *ngIf="form.controls.email.hasError('pattern')">
      Oops, wrong pattern buddy!
      </div>
  </p>
  <p>
      <label>Message:</label>
      <input type="text" formControlName="message">
      <div *ngIf="form.controls.message.errors.minlength">
      Write something longer please!
      </div>
  </p>
  <p>
      <button type="submit" [disabled]="!form.valid">Submit</button>
  </p>
</form>`;

  componentClass = `import { FormGroup, FormControl, Validators, FormBuilder }
from '@angular/forms';

@Component({
selector: "model-driven-form",
templateUrl: 'model-driven-form.html'
})
export class ModelDrivenForm {
form: FormGroup;

firstName = new FormControl("", Validators.required);

constructor(fb: FormBuilder) {
    this.form = fb.group({
        firstName: this.firstName,
        password:["", Validators.required],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
        message: ['', [Validators.required, Validators.minLength(15)]
    });
}
onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
}
}`;

  observable = `this.form.valueChanges
.map((value) => {
    value.firstName = value.firstName.toUpperCase();
    return value;
})
.filter((value) => this.form.valid)
.subscribe((value) => {
   console.log("Model Driven Form valid value: vm = ",
               JSON.stringify(value));
});`;

  updateForm = ` // template
<p>
<button type="submit" [disabled]="!form.valid">Submit</button>
<button (click)="partialUpdate()">Partial Update</button>
<button (click)="fullUpdate()">Full Update</button>
<button (click)="reset()">Cancel</button>
</p>

//component class
fullUpdate() {
  this.form.setValue({firstName: 'Partial', password: 'monkey'});
}

partialUpdate() {
  this.form.patchValue({firstName: 'Partial'});
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
