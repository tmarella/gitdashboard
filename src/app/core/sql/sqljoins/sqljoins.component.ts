import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sqljoins',
  templateUrl: './sqljoins.component.html',
  styleUrls: ['./sqljoins.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SqljoinsComponent implements OnInit {

  joinsSyntax =  `SELECT table1.column1,table1.column2,table2.column1,....
  FROM table1
  INNER/LEFT/RIGHT/FULL JOIN table2
  ON table1.matching_column = table2.matching_column;


  table1: First table.
  table2: Second table
  matching_column: Column common to both the tables.`;

  unionSyntax = `SELECT column_name(s) FROM table1 UNION SELECT column_name(s) FROM table2;

  Resultant set consists of distinct values.`;

  unionAllSyntax = `SELECT column_name(s) FROM table1 UNION ALL SELECT column_name(s) FROM table2;

  Resultant set consists of duplicate values too.`;

  constructor() { }

  ngOnInit(): void {
  }

}
