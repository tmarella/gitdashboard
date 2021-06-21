import { Title } from '@angular/platform-browser';
import { SearchService } from './shared/services/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SearchComponent } from './home/search/search.component';
import { SubmitComponent } from './home/submit/submit.component';
import { DifferencesComponent } from './core/differences/differences.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderModule } from './shared/components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SubmitComponent,
    DifferencesComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HeaderModule
  ],
  providers: [SearchService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
