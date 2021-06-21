import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-constructor-destructor',
  templateUrl: './constructor-destructor.component.html',
  styleUrls: ['./constructor-destructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstructorDestructorComponent implements OnInit {
  code = `class Car
  {
    public string model;
    public string color;
    public int year;

    // constructor with multiple parameters
    public Car(string modelName, string modelColor, int modelYear)
    {
      model = modelName;
      color = modelColor;
      year = modelYear;
    }
      // desctructor
      ~Car()
    {
          Console.WriteLine("Destructor was called");
    }

    static void Main(string[] args)
    {
      Car Ford = new Car("Mustang", "Red", 1969);
      Console.WriteLine(Ford.color + " " + Ford.year + " " + Ford.model);
    }
  }`;
  output = `Output:
  Red 1969 Mustang
  Destructor was called`;

  constructor() { }

  ngOnInit(): void {
  }

}
