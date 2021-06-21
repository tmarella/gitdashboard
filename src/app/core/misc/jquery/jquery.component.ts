import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JqueryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
