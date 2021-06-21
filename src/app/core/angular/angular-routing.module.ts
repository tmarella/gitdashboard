import { AngdatabindingComponent } from './angdatabinding/angdatabinding.component';
import { AngakitaComponent } from './misc/angakita/angakita.component';
import { AngrxjsComponent } from './misc/angrxjs/angrxjs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngbuildingblocksComponent } from './angbuildingblocks/angbuildingblocks.component';
import { AngcomponentinteractionComponent } from './angcomponentinteraction/angcomponentinteraction.component';
import { AngdirectivespipesComponent } from './angdirectivespipes/angdirectivespipes.component';
import { AngreactiveformsComponent } from './angforms/angreactiveforms/angreactiveforms.component';
import { AngtemplateformsComponent } from './angforms/angtemplateforms/angtemplateforms.component';
import { AnghttpComponent } from './anghttp/anghttp.component';
import { AngrouterComponent } from './angrouter/angrouter.component';
import { AngularComponent } from './angular.component';
import { AngngrxComponent } from './misc/angngrx/angngrx.component';

const routes: Routes = [{
  path: '', component: AngularComponent, children: [
    { path: 'angbuildingblocks', component: AngbuildingblocksComponent, data: { title: 'Angular - Building Blocks' } },
    { path: 'angcomponentinteraction', component: AngcomponentinteractionComponent, data: { title: 'Angular - Component Interaction' } },
    { path: 'angdirectivespipes', component: AngdirectivespipesComponent, data: { title: 'Angular - Directives/Pipes' } },
    { path: 'angreactiveforms', component: AngreactiveformsComponent, data: { title: 'Angular - Reactive Forms' } },
    { path: 'angtemplateforms', component: AngtemplateformsComponent, data: { title: 'Angular - Template Forms' } },
    { path: 'anghttp', component: AnghttpComponent, data: { title: 'Angular - Http' } },
    { path: 'angrouter', component: AngrouterComponent, data: { title: 'Angular - Router' } },
    { path: 'angrxjs', component: AngrxjsComponent, data: { title: 'Angular - RxJS' } },
    { path: 'angngrx', component: AngngrxComponent, data: { title: 'Angular - NGRX' } },
    { path: 'angakita', component: AngakitaComponent, data: { title: 'Angular - Akita' } },
    { path: 'angdatabinding', component: AngdatabindingComponent, data: { title: 'Angular - Data Binding' } }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
export const angularRoutingComponents = [
  AngularComponent,
  AngbuildingblocksComponent,
  AngdirectivespipesComponent,
  AngcomponentinteractionComponent,
  AnghttpComponent,
  AngrouterComponent,
  AngreactiveformsComponent,
  AngtemplateformsComponent,
  AngrxjsComponent,
  AngngrxComponent,
  AngakitaComponent,
  AngdatabindingComponent
];
