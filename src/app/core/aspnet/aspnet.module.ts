import { HeaderModule } from './../../shared/components/header/header.module';
import { TrimSubMenuModule } from './../../shared/pipes/trim-sub-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AspnetRoutingModule, aspnetRoutingComponents } from './aspnet-routing.module';

@NgModule({
  declarations: [aspnetRoutingComponents],
  imports: [
    CommonModule,
    AspnetRoutingModule,
    TrimSubMenuModule.forRoot(),
    HeaderModule
  ]
})
export class AspnetModule { }
