import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodejsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
