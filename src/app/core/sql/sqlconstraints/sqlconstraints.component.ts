import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sqlconstraints',
  templateUrl: './sqlconstraints.component.html',
  styleUrls: ['./sqlconstraints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SqlconstraintsComponent implements OnInit {
  constraintSyntax = `CREATE TABLE sample_table
  (
  column1 data_type(size) constraint_name,
  column2 data_type(size) constraint_name,
  column3 data_type(size) constraint_name,
  ....
  );`;

  constructor() { }

  ngOnInit(): void {
  }

}
