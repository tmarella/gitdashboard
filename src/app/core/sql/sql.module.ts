import { HeaderModule } from './../../shared/components/header/header.module';
import { TrimSubMenuModule } from './../../shared/pipes/trim-sub-menu.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { sqlRoutingComponents, SqlRoutingModule } from './sql-routing.module';

@NgModule({
  declarations: [sqlRoutingComponents],
  imports: [
    CommonModule,
    SqlRoutingModule,
    TrimSubMenuModule.forRoot(),
    HeaderModule
  ],
  exports: []
})
export class SqlModule { }
