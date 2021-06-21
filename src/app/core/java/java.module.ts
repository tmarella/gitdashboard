import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavaRoutingModule } from './java-routing.module';
import { JavaComponent } from './java.component';


@NgModule({
  declarations: [JavaComponent],
  imports: [
    CommonModule,
    JavaRoutingModule
  ]
})
export class JavaModule { }
