import { trigger } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sqltriggers',
  templateUrl: './sqltriggers.component.html',
  styleUrls: ['./sqltriggers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SqltriggersComponent implements OnInit {

  triggerSyntax = `create trigger [trigger_name]
  [before | after]
  {insert | update | delete}
  on [table_name]
  [for each row]
  [trigger_body] `;

  constructor() { }

  ngOnInit(): void {
  }

}
