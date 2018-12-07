import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomerService} from './customerservice';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { CustomerrowComponent } from './searchlist/customerrow/customerrow.component';
import {AdminModule} from './admin.module';
@NgModule({
  declarations: [
    AppComponent, SearchlistComponent, CustomerrowComponent
  ],
  imports: [

  BrowserModule, AdminModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
