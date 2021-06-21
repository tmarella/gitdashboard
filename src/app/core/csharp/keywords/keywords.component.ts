import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeywordsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
