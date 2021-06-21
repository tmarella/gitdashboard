import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-jest',
  templateUrl: './jest.component.html',
  styleUrls: ['./jest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
