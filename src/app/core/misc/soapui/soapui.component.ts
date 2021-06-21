import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-soapui',
  templateUrl: './soapui.component.html',
  styleUrls: ['./soapui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoapuiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
