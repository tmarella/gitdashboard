import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nunit',
  templateUrl: './nunit.component.html',
  styleUrls: ['./nunit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NunitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
