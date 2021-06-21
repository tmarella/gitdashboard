import { fadeInAnimation } from './../../shared/animations/fade-in-animation';
import { angularmenu } from './angular-menu';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [fadeInAnimation]
})
export class AngularComponent implements OnInit {

  angularmenu = angularmenu;

  constructor() { }

  ngOnInit(): void {
  }
  onActivate() {
    window.scroll(0, 0);
  }

}
