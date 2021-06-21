import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JavascriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
