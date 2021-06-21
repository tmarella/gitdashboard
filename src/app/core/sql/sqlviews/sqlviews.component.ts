import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sqlviews',
  templateUrl: './sqlviews.component.html',
  styleUrls: ['./sqlviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SqlviewsComponent implements OnInit {

  viewSyntax = `CREATE VIEW view_name AS
  SELECT column1, column2.....
  FROM table_name
  WHERE condition;`;
  constructor() { }

  ngOnInit(): void {
  }

}
