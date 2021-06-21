import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-angcomponentinteraction',
  templateUrl: './angcomponentinteraction.component.html',
  styleUrls: ['./angcomponentinteraction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngcomponentinteractionComponent implements OnInit {

  inputChild = `  //child component

  import { Component, Input } from ‘@angular/core’;
  @Component({
    selector: ‘app - child’,
    template: 'Say {{ message }}',
    styleUrls: [‘./ child.component.css’]
   })
  export class ChildComponent {
    @Input() childMessage: string;
    constructor() { }
  }`;
  inputParent = `  //Parent component

  import { Component } from ‘@angular/core’;
  @Component({
    selector: ‘app - parent’,
    template: '<app-child [childMessage]=”parentMessage”></app-child>',
    styleUrls: [‘./ parent.component.css’]
   })
  export class ParentComponent {
    parentMessage = “message from parent”
  constructor() { }
  }`;
  outputParent = `  //Parent component

  import { Component } from '@angular/core';
  @Component({
    selector: 'app-parent',
    template: 'Message: {{message}}
        < app - child(messageEvent)="receiveMessage($event)"> </>',
    styleUrls: ['./parent.component.css']
  })
  export class ParentComponent {
    constructor() { }
    message: string;
    receiveMessage($event) {
        this.message = $event
    }
  }`;
  outputChild = `  //child component

  import { Component, Output, EventEmitter } from '@angular/core';
  @Component({
    selector: 'app-child',
    template: '<button (click)="sendMessage()">Send Message</button>',
    styleUrls: ['./child.component.css']
  })
  export class ChildComponent {
    message: string = "Hola Mundo!"
    @Output() messageEvent = new EventEmitter<string>();
    constructor() { }
    sendMessage() {
        this.messageEvent.emit(this.message)
    }
  }`;
  templateVariableParent = `  //Parent component

  import { Component } from '@angular/core';
  @Component({
    selector: 'app-parent',
    template: '<app-child #song></app-child>
        <button (click)="song.play()"> </button>'
  });
  export class Parent {
    title = "Modern Streamer"constructor() { }
  }`;
  templateVariableChild = `  //child component

  import { Component } from '@angular/core'
  @Component({
    selector: 'app-child',
    template: '<h1>My playlist</h1>'
  });
  export class Parent {
    audio = new Audio();
    constructor() { }
    play() {
        this.audio.start();
    }
  }`;
  viewchildParent = `  //Parent component

  import { Component, ViewChild, AfterViewInit } from '@angular/core';
  import { ChildComponent } from "../child/child.component";
  @Component({
    selector: 'app-parent',
    template: 'Message: {{ message }}
              <app-child></app-child>',
    styleUrls: ['./parent.component.css']
  })
  export class ParentComponent implements AfterViewInit {
    @ViewChild(ChildComponent) child;
    constructor() { }
    message:string;
    ngAfterViewInit() {
      this.message = this.child.message
    }
  }`;
  viewchildChild = `  //child component

  import { Component} from ‘@angular/core’;
  @Component({
    selector: ‘app-child’,
    template: ''
    styleUrls: [‘./child.component.css’]
   })
   export class ChildComponent {
     message = ‘Hello There!’;
     constructor() { }
  }`;
  sharedserviceComponent1 = `  //Component 1

  import { Component, OnInit } from '@angular/core';
  import { DataService } from "../data.service";
  @Component({
    selector: 'app-parent',
    template: '{{message}}',
    styleUrls: ['./sibling.component.css']
  })
  export class ParentComponent implements OnInit {
    message:string;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    }
  }`;
  sharedserviceComponent2 = `  //Component 2

  import { Component, OnInit } from ‘@angular/core’;
  import { DataService } from “../data.service”;
  @Component({
    selector: ‘app- sibling’,
    template: '{{message}}
              <button (click)=”newMessage() ”> New Message </button>',
    styleUrls: [‘./ sibling.component.css’]
  })
  export class SiblingComponent implements OnInit {
      message: string;
    constructor(private data: DataService) { }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message)
    } newMessage() {
        this.data.changeMessage(“Hello from Sibling”)
    }
  }`;
  sharedservice = `  //shared service
  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';
  @Injectable()
  export class DataService {
    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();
    constructor() { }
    changeMessage(message: string) {
      this.messageSource.next(message)
    }
  }`;

  constructor() { }

  ngOnInit(): void {
  }

}
