import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sqlstoredprocedures',
  templateUrl: './sqlstoredprocedures.component.html',
  styleUrls: ['./sqlstoredprocedures.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SqlstoredproceduresComponent implements OnInit {
  spSyntax = `CREATE or REPLACE PROCEDURE name(parameters)
  IS
  variables;
  BEGIN
  //statements;
  END;`;

  constructor() { }

  ngOnInit(): void {
  }

}
