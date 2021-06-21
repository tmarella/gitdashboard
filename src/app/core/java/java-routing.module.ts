import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavaComponent } from './java.component';

const routes: Routes = [{ path: '', component: JavaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaRoutingModule { }
