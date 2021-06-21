import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hangfire',
  templateUrl: './hangfire.component.html',
  styleUrls: ['./hangfire.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangfireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
