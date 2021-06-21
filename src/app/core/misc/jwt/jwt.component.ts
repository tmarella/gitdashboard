import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-jwt',
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JwtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
