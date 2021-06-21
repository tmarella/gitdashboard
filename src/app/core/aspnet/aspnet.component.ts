import { fadeInAnimation } from './../../shared/animations/fade-in-animation';
import { Component, OnInit } from '@angular/core';
import { aspnetmenu } from '../aspnet/aspnet-menu';

@Component({
  selector: 'app-aspnet',
  templateUrl: './aspnet.component.html',
  styleUrls: ['./aspnet.component.scss'],
  animations: [fadeInAnimation]
})
export class AspnetComponent implements OnInit {

  aspnetmenu = aspnetmenu;

  constructor() { }

  ngOnInit(): void {
  }
  onActivate() {
    window.scroll(0, 0);
  }

}
