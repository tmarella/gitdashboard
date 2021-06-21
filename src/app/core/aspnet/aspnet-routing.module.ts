import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspnetComponent } from './aspnet.component';
import { CoredependencyinjectionComponent } from './core/coredependencyinjection/coredependencyinjection.component';
import { CoreexceptionhandlingComponent } from './core/coreexceptionhandling/coreexceptionhandling.component';
import { CoreinitialsetupComponent } from './core/coreinitialsetup/coreinitialsetup.component';
import { CoreloggingComponent } from './core/corelogging/corelogging.component';
import { CoremiddlewareComponent } from './core/coremiddleware/coremiddleware.component';
import { CorestaticfilesComponent } from './core/corestaticfiles/corestaticfiles.component';
import { MvcactionsComponent } from './mvc/mvcactions/mvcactions.component';
import { MvcarchitectureComponent } from './mvc/mvcarchitecture/mvcarchitecture.component';
import { MvccachingComponent } from './mvc/mvccaching/mvccaching.component';
import { MvcentityframeworkComponent } from './mvc/mvcentityframework/mvcentityframework.component';
import { MvcexceptionhandlingComponent } from './mvc/mvcexceptionhandling/mvcexceptionhandling.component';
import { MvcfiltersComponent } from './mvc/mvcfilters/mvcfilters.component';
import { MvchelpersComponent } from './mvc/mvchelpers/mvchelpers.component';
import { MvchttpcontextComponent } from './mvc/mvchttpcontext/mvchttpcontext.component';
import { MvcmodelbindingComponent } from './mvc/mvcmodelbinding/mvcmodelbinding.component';
import { MvcroutingComponent } from './mvc/mvcrouting/mvcrouting.component';
import { MvcvalidationComponent } from './mvc/mvcvalidation/mvcvalidation.component';
import { ApiactionreturnComponent } from './webapi/apiactionreturn/apiactionreturn.component';
import { ApifiltersComponent } from './webapi/apifilters/apifilters.component';
import { ApiroutingComponent } from './webapi/apirouting/apirouting.component';
import { ApiintroComponent } from './webapi/apiintro/apiintro.component';
import { WfadonetComponent } from './webforms/wfadonet/wfadonet.component';
import { WfbuildingblocksComponent } from './webforms/wfbuildingblocks/wfbuildingblocks.component';
import { WfcachingComponent } from './webforms/wfcaching/wfcaching.component';
import { WfcontrolsComponent } from './webforms/wfcontrols/wfcontrols.component';
import { WfemailsComponent } from './webforms/wfemails/wfemails.component';
import { WfeventsComponent } from './webforms/wfevents/wfevents.component';
import { WfmasterpageComponent } from './webforms/wfmasterpage/wfmasterpage.component';
import { WfnavigationComponent } from './webforms/wfnavigation/wfnavigation.component';
import { WfsecurityComponent } from './webforms/wfsecurity/wfsecurity.component';
import { WfstatesComponent } from './webforms/wfstates/wfstates.component';
import { WfvalidationComponent } from './webforms/wfvalidation/wfvalidation.component';
import { MvcstateComponent } from './mvc/mvcstate/mvcstate.component';

const routes: Routes = [
  {
    path: '', component: AspnetComponent, children: [
      { path: 'wfbuildingblocks', component: WfbuildingblocksComponent, data: { title: 'Web Forms - Building Blocks' } },
      { path: 'wfcontrols', component: WfcontrolsComponent, data: { title: 'Web Forms - Controls' } },
      { path: 'wfevents', component: WfeventsComponent, data: { title: 'Web Forms - Events' } },
      { path: 'wfstates', component: WfstatesComponent, data: { title: 'Web Forms - States' } },
      { path: 'wfadonet', component: WfadonetComponent, data: { title: 'Web Forms - ADO.NET' } },
      { path: 'wfmasterpage', component: WfmasterpageComponent, data: { title: 'Web Forms - Master Page' } },
      { path: 'wfnavigation', component: WfnavigationComponent, data: { title: 'Web Forms - Navigation' } },
      { path: 'wfvalidation', component: WfvalidationComponent, data: { title: 'Web Forms - Validation' } },
      { path: 'wfcaching', component: WfcachingComponent, data: { title: 'Web Forms - Caching' } },
      { path: 'wfemails', component: WfemailsComponent, data: { title: 'Web Forms - Emails' } },
      { path: 'wfsecurity', component: WfsecurityComponent, data: { title: 'Web Forms - Security' } },
      { path: 'mvcarchitecture', component: MvcarchitectureComponent, data: { title: 'MVC - Architecture' } },
      { path: 'mvcactions', component: MvcactionsComponent, data: { title: 'MVC - Actions' } },
      { path: 'mvccaching', component: MvccachingComponent, data: { title: 'MVC - Caching' } },
      { path: 'mvcexceptionhandling', component: MvcexceptionhandlingComponent, data: { title: 'MVC - Exception Handling' } },
      { path: 'mvcfilters', component: MvcfiltersComponent, data: { title: 'MVC - Filters' } },
      { path: 'mvchelpers', component: MvchelpersComponent, data: { title: 'MVC - Helpers' } },
      { path: 'mvchttpcontext', component: MvchttpcontextComponent, data: { title: 'MVC - HttpContext' } },
      { path: 'mvcmodelbinding', component: MvcmodelbindingComponent, data: { title: 'MVC - Model Binding' } },
      { path: 'mvcrouting', component: MvcroutingComponent, data: { title: 'MVC - Routing' } },
      { path: 'mvcvalidation', component: MvcvalidationComponent, data: { title: 'MVC - Validation' } },
      { path: 'mvcentityframework', component: MvcentityframeworkComponent, data: { title: 'MVC - Entity Framework' } },
      { path: 'mvcstate', component: MvcstateComponent, data: { title: 'MVC - State' } },
      { path: 'apiactionreturn', component: ApiactionreturnComponent, data: { title: 'Web Api - Action Return Type' } },
      { path: 'apifilters', component: ApifiltersComponent, data: { title: 'Web Api - Filters' } },
      { path: 'apirouting', component: ApiroutingComponent, data: { title: 'Web Api - Routing' } },
      { path: 'apiintro', component: ApiintroComponent, data: { title: 'Web Api - Introduction' } },
      { path: 'coredependencyinjection', component: CoredependencyinjectionComponent, data: { title: '.Net Core - Dependency Injection' } },
      { path: 'coreexceptionhandling', component: CoreexceptionhandlingComponent, data: { title: '.Net Core - Exception Handling' } },
      { path: 'corelogging', component: CoreloggingComponent, data: { title: '.Net Core - Logging' } },
      { path: 'coremiddleware', component: CoremiddlewareComponent, data: { title: '.Net Core - Middleware' } },
      { path: 'corestaticfiles', component: CorestaticfilesComponent, data: { title: '.Net Core - Static Files' } },
      { path: 'coreinitialsetup', component: CoreinitialsetupComponent, data: { title: '.Net Core - Initial Setup' } }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspnetRoutingModule { }
export const aspnetRoutingComponents = [
  AspnetComponent,
  WfbuildingblocksComponent,
  WfcontrolsComponent,
  WfeventsComponent,
  WfstatesComponent,
  WfadonetComponent,
  WfmasterpageComponent,
  WfnavigationComponent,
  WfvalidationComponent,
  WfcachingComponent,
  WfemailsComponent,
  WfsecurityComponent,
  MvcactionsComponent,
  MvccachingComponent,
  MvcexceptionhandlingComponent,
  MvcfiltersComponent,
  MvchelpersComponent,
  MvchttpcontextComponent,
  MvcmodelbindingComponent,
  MvcroutingComponent,
  MvcvalidationComponent,
  MvcstateComponent,
  MvcentityframeworkComponent,
  ApiactionreturnComponent,
  ApifiltersComponent,
  ApiroutingComponent,
  ApiintroComponent,
  CoredependencyinjectionComponent,
  CoreexceptionhandlingComponent,
  CoreloggingComponent,
  CoremiddlewareComponent,
  CorestaticfilesComponent,
  CoreinitialsetupComponent
];
