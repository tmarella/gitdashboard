import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-log4net',
  templateUrl: './log4net.component.html',
  styleUrls: ['./log4net.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Log4netComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
