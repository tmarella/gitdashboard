import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
