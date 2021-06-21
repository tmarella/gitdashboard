import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlgorithmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
