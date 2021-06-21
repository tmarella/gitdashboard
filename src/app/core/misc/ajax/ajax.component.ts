import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AjaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
