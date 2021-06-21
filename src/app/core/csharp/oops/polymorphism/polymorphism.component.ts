import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-polymorphism',
  templateUrl: './polymorphism.component.html',
  styleUrls: ['./polymorphism.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolymorphismComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
