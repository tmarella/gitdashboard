import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-corelogging',
  templateUrl: './corelogging.component.html',
  styleUrls: ['./corelogging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreloggingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
