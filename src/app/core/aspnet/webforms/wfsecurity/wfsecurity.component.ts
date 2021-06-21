import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wfsecurity',
  templateUrl: './wfsecurity.component.html',
  styleUrls: ['./wfsecurity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WfsecurityComponent implements OnInit {
  syntax = `<authentication mode="windows">
  <authentication mode="passport">
  <authentication mode="forms">
`;

  constructor() { }

  ngOnInit(): void {
  }

}
