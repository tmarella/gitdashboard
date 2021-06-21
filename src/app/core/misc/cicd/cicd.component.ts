import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cicd',
  templateUrl: './cicd.component.html',
  styleUrls: ['./cicd.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CicdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
