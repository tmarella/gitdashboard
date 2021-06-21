import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-delegates',
  templateUrl: './delegates.component.html',
  styleUrls: ['./delegates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DelegatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
