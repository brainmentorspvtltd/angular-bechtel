import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import {ApprouteModule} from './approute/approute.module';
import { About1Component } from './about/about1/about1.component';
import { About2Component } from './about/about2/about2.component';
import {AuthGuard} from './authguard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    About1Component,
    About2Component
  ],
  imports: [
    BrowserModule, ApprouteModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
