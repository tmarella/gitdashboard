import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypescriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
