import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-specflow',
  templateUrl: './specflow.component.html',
  styleUrls: ['./specflow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecflowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
