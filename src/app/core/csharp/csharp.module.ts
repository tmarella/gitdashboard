import { HeaderModule } from './../../shared/components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsharpRoutingModule, csharpRoutingComponents } from './csharp-routing.module';

@NgModule({
  declarations: [csharpRoutingComponents],
  imports: [
    CommonModule,
    CsharpRoutingModule,
    HeaderModule
  ]
})
export class CsharpModule { }
