import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitComponent implements OnInit {

  TopicForm = this.fb.group({

    name: ['', Validators.required],
    email: ['', Validators.required],
    topic: ['', Validators.required]
  });

  name: string;
  email: string;
  topic: string;
  canSubmit: boolean;

  constructor(private fb: FormBuilder) {
    this.setupForm();
  }

  ngOnInit(): void { }

  // convenience getter for easy access to form fields
  public get f() { return this.TopicForm.controls; }

  setupForm() {

    this.name = '';
    this.email = '';
    this.topic = '';

    this.TopicForm.controls[`name`].valueChanges.subscribe(
      (name: string) => {
        this.name = name;
        // this.validateFields();
      },
      (error) => {
        console.log(error);
      }
    );

    this.TopicForm.controls[`email`].valueChanges.subscribe(
      (email: string) => {
        this.email = email;
        // this.validateFields();
      },
      (error) => {
        console.log(error);
      }
    );

    this.TopicForm.controls[`topic`].valueChanges.subscribe(
      (topic: string) => {
        this.topic = topic;
        // this.validateFields();
      },
      (error) => {
        console.log(error);
      }
    );

  }
  controlSubmitTopic() {
    // regulates all validations
    this.controlValidation();
    if (this.canSubmit) {
      alert('Topic: ' + this.f[`topic`].value + ' is submitted.');
      this.resetForm();
    }
  }
  resetForm() {
    this.TopicForm.reset();
  }
  controlValidation() {
    this.canSubmit = this.TopicForm.get('name').status === 'VALID' &&
      this.TopicForm.get('email').status === 'VALID' && this.TopicForm.get('topic').status === 'VALID';

    if (this.TopicForm.get('name').status !== 'VALID') {
      this.TopicForm.get('name').markAsTouched();
    }
    if (this.TopicForm.get('email').status !== 'VALID') {
      this.TopicForm.get('email').markAsTouched();
    }
    if (this.TopicForm.get('topic').status !== 'VALID') {
      this.TopicForm.get('topic').markAsTouched();
    }
  }
}
