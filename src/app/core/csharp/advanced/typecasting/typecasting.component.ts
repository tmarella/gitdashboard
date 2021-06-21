import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-typecasting',
  templateUrl: './typecasting.component.html',
  styleUrls: ['./typecasting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypecastingComponent implements OnInit {
  implicit = `int smallnum = 654667;
  // Implicit conversion
  long bigNum = smallnum;`;

  explicit = `long bigNum = 654667;
  // Explicit conversion
  int smallnum = (int)bigNum;`;

  constructor() { }

  ngOnInit(): void {
  }

}
