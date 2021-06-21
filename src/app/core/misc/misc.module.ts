import { HeaderModule } from './../../shared/components/header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { miscRoutingComponents, MiscRoutingModule } from './misc-routing.module';

@NgModule({
  declarations: [miscRoutingComponents],
  imports: [
    CommonModule,
    MiscRoutingModule,
    HeaderModule
  ]
})
export class MiscModule { }
