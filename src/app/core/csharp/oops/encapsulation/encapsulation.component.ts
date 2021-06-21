import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
