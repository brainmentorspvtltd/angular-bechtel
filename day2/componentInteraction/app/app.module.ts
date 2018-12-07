import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { CustomerrowComponent } from './searchlist/customerrow/customerrow.component';
@NgModule({
  declarations: [
    AppComponent, SearchComponent, SearchlistComponent, CustomerrowComponent
  ],
  imports: [

  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
