import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DifferencesComponent } from './core/differences/differences.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions/questions.component';
import { AngquestionsComponent } from './questions/angquestions/angquestions.component';
import { SqlquestionsComponent } from './questions/sqlquestions/sqlquestions.component';
import { AspquestionsComponent } from './questions/aspquestions/aspquestions.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Interview Depo' } },
  { path: 'differences', component: DifferencesComponent, data: { title: 'Differences' } },
  { path: 'questions', component: QuestionsComponent, data: { title: 'Questions' } },
  { path: 'angquestions', component: AngquestionsComponent, data: { title: 'Angular' } },
  { path: 'sqlquestions', component: SqlquestionsComponent, data: { title: 'Sql Questions' } },
  { path: 'aspquestions', component: AspquestionsComponent, data: { title: 'ASP.NET Questions' } },
  { path: 'csharp', loadChildren: () => import('./core/csharp/csharp.module').then(m => m.CsharpModule), data: { title: 'C#' } },
  { path: 'aspnet', loadChildren: () => import('./core/aspnet/aspnet.module').then(m => m.AspnetModule), data: { title: 'ASP.NET' } },
  { path: 'angular', loadChildren: () => import('./core/angular/angular.module').then(m => m.AngularModule), data: { title: 'Angular' } },
  { path: 'sql', loadChildren: () => import('./core/sql/sql.module').then(m => m.SqlModule), data: { title: 'Sql' } },
  { path: 'java', loadChildren: () => import('./core/java/java.module').then(m => m.JavaModule), data: { title: 'Java' } },
  { path: 'misc', loadChildren: () => import('./core/misc/misc.module').then(m => m.MiscModule), data: { title: 'Misc' } },
  { path: '**', component: PagenotfoundComponent, data: { title: 'Page Not Found' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
