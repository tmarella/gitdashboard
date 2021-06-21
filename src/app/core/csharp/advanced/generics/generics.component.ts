import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
