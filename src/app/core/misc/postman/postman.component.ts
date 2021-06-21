import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-postman',
  templateUrl: './postman.component.html',
  styleUrls: ['./postman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
