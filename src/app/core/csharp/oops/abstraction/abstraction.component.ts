import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-abstraction',
  templateUrl: './abstraction.component.html',
  styleUrls: ['./abstraction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbstractionComponent implements OnInit {
  code = `class program
  {
      abstract class animal
      {
          public abstract void eat();
          public void sound()
          {
              Console.WriteLine("dog can sound");
          }
      }
      class dog : animal
      {
          public override void eat()
          {
              Console.WriteLine("dog can eat");
          }
      }
      static void Main(string[] args)
      {
          dog mydog = new dog();
          animal thePet = mydog;
          thePet.eat();
          mydog.sound();
      }
  }`;
  output = `Output:
  dog can eat
  dog can sound`;

  constructor() { }

  ngOnInit(): void {
  }

}
