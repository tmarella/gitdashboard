import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReflectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
