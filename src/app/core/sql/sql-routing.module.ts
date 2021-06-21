import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlnormalizationComponent } from './misc/sqlnormalization/sqlnormalization.component';
import { SqlrelationshipsComponent } from './misc/sqlrelationships/sqlrelationships.component';
import { SqlComponent } from './sql.component';
import { SqlbuildingblocksComponent } from './sqlbuildingblocks/sqlbuildingblocks.component';
import { SqlconstraintsComponent } from './sqlconstraints/sqlconstraints.component';
import { SqlexceptionhandlingComponent } from './sqlexceptionhandling/sqlexceptionhandling.component';
import { SqlfunctionsComponent } from './sqlfunctions/sqlfunctions.component';
import { SqlindexesComponent } from './sqlindexes/sqlindexes.component';
import { SqljoinsComponent } from './sqljoins/sqljoins.component';
import { SqlperformancetuningComponent } from './sqlperformancetuning/sqlperformancetuning.component';
import { SqlstoredproceduresComponent } from './sqlstoredprocedures/sqlstoredprocedures.component';
import { SqltriggersComponent } from './sqltriggers/sqltriggers.component';
import { SqlviewsComponent } from './sqlviews/sqlviews.component';

const routes: Routes = [
  {
    path: '', component: SqlComponent, children: [
      { path: 'sqlbuildingblocks', component: SqlbuildingblocksComponent, data: { title: 'Sql - Building Blocks' } },
      { path: 'sqlconstraints', component: SqlconstraintsComponent, data: { title: 'Sql - Constraints' } },
      { path: 'sqlfunctions', component: SqlfunctionsComponent, data: { title: 'Sql - Functions' } },
      { path: 'sqlindexes', component: SqlindexesComponent, data: { title: 'Sql - Indexes' } },
      { path: 'sqljoins', component: SqljoinsComponent, data: { title: 'Sql - Joins' } },
      { path: 'sqlstoredprocedures', component: SqlstoredproceduresComponent, data: { title: 'Sql - Stored Procedures' } },
      { path: 'sqltriggers', component: SqltriggersComponent, data: { title: 'Sql - Triggers' } },
      { path: 'sqlviews', component: SqlviewsComponent, data: { title: 'Sql - Views' } },
      { path: 'sqlperformancetuning', component: SqlperformancetuningComponent, data: { title: 'Sql - Performance Tuning' } },
      { path: 'sqlexceptionhandling', component: SqlexceptionhandlingComponent, data: { title: 'Sql - Exception Handling' } },
      { path: 'sqlrelationships', component: SqlrelationshipsComponent, data: { title: 'Sql - Relationships' } },
      { path: 'sqlnormalization', component: SqlnormalizationComponent, data: { title: 'Sql - Normalization' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SqlRoutingModule { }
export const sqlRoutingComponents = [
  SqlComponent,
  SqlbuildingblocksComponent,
  SqlviewsComponent,
  SqlfunctionsComponent,
  SqlstoredproceduresComponent,
  SqljoinsComponent,
  SqlconstraintsComponent,
  SqlindexesComponent,
  SqltriggersComponent,
  SqlperformancetuningComponent,
  SqlexceptionhandlingComponent,
  SqlrelationshipsComponent,
  SqlnormalizationComponent
];
