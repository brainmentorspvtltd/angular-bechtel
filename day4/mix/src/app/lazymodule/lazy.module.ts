import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MyInterceptor } from '../myinterceptor';

const lazyRoutes:Routes=[
  {path:'',component:LazyComponent}
  //,
  // {path:'one',component:LazyOneComponent}
];

@NgModule({
  imports: [

  CommonModule, RouterModule.forChild(lazyRoutes), HttpClientModule
  ],
  declarations: [LazyComponent],
  providers:[],
  //providers:[{provide:HTTP_INTERCEPTORS,useClass:MyInterceptor,multi:true}],
  exports:[RouterModule]
})
export class LazyModule {
  constructor(){
    console.log("Lazy Module Loaded");

  }
}
