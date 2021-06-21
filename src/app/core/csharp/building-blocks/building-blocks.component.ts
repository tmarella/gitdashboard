import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-building-blocks',
  templateUrl: './building-blocks.component.html',
  styleUrls: ['./building-blocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingBlocksComponent implements OnInit {

  interaceSyntax = `interface  <interface_name >
  {
      // declare Events
      // declare indexers
      // declare methods
      // declare properties
  }

  //implementing interface
  class class_name : interface_name

  //implementing generic interface
  class Stack<T> where T : System.IComparable<T>, IEnumerable<T>`;

  constructor() { }

  ngOnInit(): void {
  }

}
