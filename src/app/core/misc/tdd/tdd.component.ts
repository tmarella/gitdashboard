import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tdd',
  templateUrl: './tdd.component.html',
  styleUrls: ['./tdd.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
