import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-knockoutjs',
  templateUrl: './knockoutjs.component.html',
  styleUrls: ['./knockoutjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KnockoutjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
