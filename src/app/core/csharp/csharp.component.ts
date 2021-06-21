import { fadeInAnimation } from './../../shared/animations/fade-in-animation';
import { csharpmenu } from './csharp-menu';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.scss'],
  animations: [fadeInAnimation]
})
export class CsharpComponent implements OnInit {
  csharpmenu = csharpmenu;

  constructor() { }

  ngOnInit(): void {
  }
  onActivate() {
    window.scroll(0, 0);
  }

}
