import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-multi-threading',
  templateUrl: './multi-threading.component.html',
  styleUrls: ['./multi-threading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiThreadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
