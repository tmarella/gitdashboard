import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mvcentityframework',
  templateUrl: './mvcentityframework.component.html',
  styleUrls: ['./mvcentityframework.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MvcentityframeworkComponent implements OnInit {

  poco = `public class Author
  {
      public int Id { get; set; }
      public string Name { get; set; }
  }`;

  dbset = `public DbSet<Author> Authors { get; set; }`;

  constructor() { }

  ngOnInit(): void {
  }

}
