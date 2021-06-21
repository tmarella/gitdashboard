import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-indexers',
  templateUrl: './indexers.component.html',
  styleUrls: ['./indexers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexersComponent implements OnInit {
  syntax = `[access_modifier] [return_type] this [argument_list]
  {
    get
    {
       // get block code
    }
    set
    {
      // set block code
    }

  }`;

  code = `
  // C# program to illustrate the Indexer
  using System;

  // class declaration
  class IndexerCreation
  {

      // class members
      private string[] val = new string[3];

      // Indexer declaration
      // Here pubic is the modifier
      // string is the return type of
      // Indexer and "this" is the keyword
      // having parameters list
      public string this[int index]
      {

          // get Accessor
          // retrieving the values
          // stored in val[] array
          // of strings
          get
          {

              return val[index];
          }

          // set Accessor
          // setting the value at
          // passed index of val
          set
          {

              // value keyword is used
              // to define the value
              // being assigned by the
              // set indexer.
              val[index] = value;
          }
      }
  }

  // Driver Class
  class main {

      // Main Method
      public static void Main() {

          // creating an object of parent class which
          // acts as primary address for using Indexer
          IndexerCreation ic = new IndexerCreation();

          // Inserting values in ic[]
          // Here we are using the object
          // of class as an array
          ic[0] = "C";
          ic[1] = "CPP";
          ic[2] = "CSHARP";

          Console.Write("Printing values stored in objects used as arrays\n");

          // printing values
          Console.WriteLine("First value = {0}", ic[0]);
          Console.WriteLine("Second value = {0}", ic[1]);
          Console.WriteLine("Third value = {0}", ic[2]);

      }
  }
  `;

  output = `Printing values stored in objects used as arrays
  First value = C
  Second value = CPP
  Third value = CSHARP`;

  constructor() { }

  ngOnInit(): void {
  }

}
