import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-coredependencyinjection',
  templateUrl: './coredependencyinjection.component.html',
  styleUrls: ['./coredependencyinjection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoredependencyinjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
