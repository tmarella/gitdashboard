import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-launchdarkly',
  templateUrl: './launchdarkly.component.html',
  styleUrls: ['./launchdarkly.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchdarklyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
