import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {Child1Component} from './first/child1/child1.component';
import {Child2Component} from './first/child2/child2.component';
import { NgModule } from '@angular/core';
import {MyGuard} from './myguard';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'first/:id/:name/:salary',canActivate:[MyGuard],component:FirstComponent,children:[
    {path:'child1',component:Child1Component},{path:'child2',component:Child2Component}
  ]},
  {path:'second',component:SecondComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class MyRouterModule{

}
