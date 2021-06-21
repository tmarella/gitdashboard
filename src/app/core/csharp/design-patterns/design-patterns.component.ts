import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignPatternsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
