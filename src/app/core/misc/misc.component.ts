import { fadeInAnimation } from './../../shared/animations/fade-in-animation';
import { Component, OnInit } from '@angular/core';
import { miscmenu } from './misc-menu';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss'],
  animations: [fadeInAnimation]
})
export class MiscComponent implements OnInit {
  miscmenu = miscmenu;

  constructor() { }

  ngOnInit(): void {
  }
  onActivate() {
    window.scroll(0, 0);
  }
}
