import { fadeInAnimation } from './../../shared/animations/fade-in-animation';
import { Component, OnInit } from '@angular/core';
import { sqlmenu } from './sql-menu';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss'],
  animations: [fadeInAnimation]
})
export class SqlComponent implements OnInit {
  sqlmenu = sqlmenu;

  constructor() { }

  ngOnInit(): void {
  }
  onActivate() {
    window.scroll(0, 0);
  }

}
