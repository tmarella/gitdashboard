import { HeaderModule } from './../../shared/components/header/header.module';
import { TrimSubMenuModule } from './../../shared/pipes/trim-sub-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule, angularRoutingComponents } from './angular-routing.module';


@NgModule({
  declarations: [angularRoutingComponents],
  imports: [
    CommonModule,
    AngularRoutingModule,
    TrimSubMenuModule.forRoot(),
    HeaderModule
  ]
})
export class AngularModule { }
