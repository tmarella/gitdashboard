import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-angdatabinding',
  templateUrl: './angdatabinding.component.html',
  styleUrls: ['./angdatabinding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngdatabindingComponent implements OnInit {

  interpolation = `export class AppComponent {
    items= {
        title: 'Foot Ball',
        price: 700
    };
}

<h2>Title : {{product.title}}</h2>
<h2>Price : {{product.price}}</h2>`;

  eventBinding = `export class AppComponent {
     addProdadditemsuct() {
        console.log('add items');
    }

}

<button (click)='additems()'>
   Add Product
</button>`;

  propertyBinding = `export class AppComponent {
   myBlog: string = "My First Angular Blog";
 }

 <div>  <input [value]='myBlog'></span>
</div>`;

  twowayBinding = `@Component({
    selector:'my-app',
    template:'<div class="container"><input [(ngModel)]='name' /><br/><h1>Hello {{name}}</h1></div>'
}
)
export class AppComponent{}`;

  constructor() { }

  ngOnInit(): void {
  }

}
