import { fadeInAnimation } from './../../shared/animations/fade-in-animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-differences',
  templateUrl: './differences.component.html',
  styleUrls: ['./differences.component.scss'],
  animations: [fadeInAnimation]
})
export class DifferencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
