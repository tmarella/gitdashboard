import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
