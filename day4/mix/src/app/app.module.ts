import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { Child1Component } from './first/child1/child1.component';
import { Child2Component } from './first/child2/child2.component';
import {MyRouterModule} from './route.module';
import {MyGuard} from './myguard';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Child3Component } from './first/child3/child3.component';
import { ColorDirective } from './color.directive';
import { MystructuralDirective } from './mystructural.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    ColorDirective,
    MystructuralDirective
  ],
  imports: [
    BrowserModule,MyRouterModule,FormsModule,ReactiveFormsModule
  ],
  providers: [MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App Module Loaded");
  }

}
