import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjaxComponent } from './ajax/ajax.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CicdComponent } from './cicd/cicd.component';
import { CssComponent } from './css/css.component';
import { HangfireComponent } from './hangfire/hangfire.component';
import { HtmlComponent } from './html/html.component';
import { JasminekarmaComponent } from './jasminekarma/jasminekarma.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JestComponent } from './jest/jest.component';
import { JqueryComponent } from './jquery/jquery.component';
import { JwtComponent } from './jwt/jwt.component';
import { KnockoutjsComponent } from './knockoutjs/knockoutjs.component';
import { LaunchdarklyComponent } from './launchdarkly/launchdarkly.component';
import { Log4netComponent } from './log4net/log4net.component';
import { MiscComponent } from './misc.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { NunitComponent } from './nunit/nunit.component';
import { PostmanComponent } from './postman/postman.component';
import { SoapuiComponent } from './soapui/soapui.component';
import { SpecflowComponent } from './specflow/specflow.component';
import { SplunkComponent } from './splunk/splunk.component';
import { TddComponent } from './tdd/tdd.component';
import { TypescriptComponent } from './typescript/typescript.component';

const routes: Routes = [{
  path: '', component: MiscComponent, children: [
    { path: 'ajax', component: AjaxComponent, data: { title: 'Ajax' } },
    { path: 'bootstrap', component: BootstrapComponent, data: { title: 'Bootstrap' } },
    { path: 'cicd', component: CicdComponent, data: { title: 'CI/CD' } },
    { path: 'css', component: CssComponent, data: { title: 'CSS' } },
    { path: 'hangfire', component: HangfireComponent, data: { title: 'Hangfire' } },
    { path: 'html', component: HtmlComponent, data: { title: 'HTML' } },
    { path: 'jasminekarma', component: JasminekarmaComponent, data: { title: 'Jasmine/Karma' } },
    { path: 'javascript', component: JavascriptComponent, data: { title: 'Javascript' } },
    { path: 'jest', component: JestComponent, data: { title: 'Jest' } },
    { path: 'jquery', component: JqueryComponent, data: { title: 'JQuery' } },
    { path: 'jwt', component: JwtComponent, data: { title: 'JWT' } },
    { path: 'knockoutjs', component: KnockoutjsComponent, data: { title: 'KnockoutJS' } },
    { path: 'launchdarkly', component: LaunchdarklyComponent, data: { title: 'LaunchDarkly' } },
    { path: 'log4net', component: Log4netComponent, data: { title: 'Log4net' } },
    { path: 'mongodb', component: MongodbComponent, data: { title: 'Mongodb' } },
    { path: 'nodejs', component: NodejsComponent, data: { title: 'Node.JS' } },
    { path: 'nunit', component: NunitComponent, data: { title: 'NUnit' } },
    { path: 'postman', component: PostmanComponent, data: { title: 'Postman' } },
    { path: 'soapui', component: SoapuiComponent, data: { title: 'Soap UI' } },
    { path: 'specflow', component: SpecflowComponent, data: { title: 'Specflow' } },
    { path: 'splunk', component: SplunkComponent, data: { title: 'Splunk' } },
    { path: 'tdd', component: TddComponent, data: { title: 'TDD' } },
    { path: 'typescript', component: TypescriptComponent, data: { title: 'Typescript' } }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
export const miscRoutingComponents = [
  MiscComponent,
  PostmanComponent,
  SoapuiComponent,
  TypescriptComponent,
  JavascriptComponent,
  NodejsComponent,
  HtmlComponent,
  CssComponent,
  BootstrapComponent,
  AjaxComponent,
  JqueryComponent,
  CicdComponent,
  SpecflowComponent,
  NunitComponent,
  TddComponent,
  LaunchdarklyComponent,
  HangfireComponent,
  SplunkComponent,
  Log4netComponent,
  JasminekarmaComponent,
  JestComponent,
  MongodbComponent,
  KnockoutjsComponent,
  JwtComponent
];
