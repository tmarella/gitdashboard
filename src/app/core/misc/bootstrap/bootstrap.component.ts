import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
