import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DependencyInjectionComponent implements OnInit {
  constructorInjection = `public interface text
  {
      void print();
  }
  class format : text
  {
      public void print()
      {
          Console.WriteLine(" here is text format");
      }
  }
  // constructor injection
  public class constructorinjection
  {
      private text _text;
      public constructorinjection(text t1)
      {
          this._text = t1;
      }
      public void print()
      {
          _text.print();
      }
  }
  class constructor
  {
      static void Main(string[] args)
      {
          constructorinjection cs = new constructorinjection(new format());
          cs.print();
          Console.ReadKey();
      }
  }`;

  methodInjection = `public interface Iset
  {
      void print();
  }
  public class servic : Iset
  {
      public void print()
      {
          Console.WriteLine("print........");
      }
  }
  public class client
  {
      private Iset _set;
      public void run(Iset serv)
      {
          this._set = serv;
          Console.WriteLine("start");
          this._set.print();
      }
  }
  class method
  {
      public static void Main()
      {
          client cn = new client();
          cn.run(new servic());
          Console.ReadKey();
      }
  }`;
  propertyInjection = `
  public interface INofificationAction
  {
     void ActOnNotification(string message);
  }
     class atul     {
         INofificationAction task = null;
         public void notify(INofificationAction  at ,string messages)
         {
         this.task = at;
         task.ActOnNotification(messages);
         }
     }
     class EventLogWriter : INofificationAction
     {
         public void ActOnNotification(string message)
         {
             // Write to event log here
         }
     }
     class Program
     {
         static void Main(string[] args)
         {
             //services srv = new services();
             //other oth = new other();
             //oth.run();
             //Console.WriteLine();
             EventLogWriter elw = new EventLogWriter();
             atul at = new atul();
             at.notify(elw, "to logg");
             Console.ReadKey();
         }
     }
`;

  constructor() { }

  ngOnInit(): void {
  }

}
