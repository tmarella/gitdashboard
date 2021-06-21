import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MongodbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
