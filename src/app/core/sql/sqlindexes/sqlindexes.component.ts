import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sqlindexes',
  templateUrl: './sqlindexes.component.html',
  styleUrls: ['./sqlindexes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SqlindexesComponent implements OnInit {
  indexSyntax = `  //For single column
  CREATE INDEX index ON TABLE column;

  //For multiple columns
  CREATE INDEX index ON TABLE (cloumn1, column2,.....);

  //For unique index
  CREATE UNIQUE INDEX index ON TABLE column;

  //For Clustered index
  CREATE Clustered index IX_table_name_column_name
  on table_name (column_name ASC)  ;

  //For Non-clustered index
  CREATE NonClustered index IX_table_name_column_name
  on table_name (column_name ASC)`;

  constructor() { }

  ngOnInit(): void {
  }

}
