import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exception-handling',
  templateUrl: './exception-handling.component.html',
  styleUrls: ['./exception-handling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExceptionHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
