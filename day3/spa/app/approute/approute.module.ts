import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { AboutComponent } from '../about/about.component';
import { About1Component } from '../about/about1/about1.component';
import { About2Component } from '../about/about2/about2.component';
import {AuthGuard} from '../authguard';
const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'register/:id/:name',component:RegisterComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent,children:[
    {path:'about1',component:About1Component},
    {path:'about2',component:About2Component}
      ]}
  //{path:'error',component:ErrorComponent}
];


@NgModule({
  imports: [

  RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class ApprouteModule { }
