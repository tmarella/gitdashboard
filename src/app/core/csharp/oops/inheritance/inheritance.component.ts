import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InheritanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
