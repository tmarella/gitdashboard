import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mvcactions',
  templateUrl: './mvcactions.component.html',
  styleUrls: ['./mvcactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvcactionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
