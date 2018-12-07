import { NgModule } from "@angular/core";

import { SearchComponent } from './search/search.component';
import {AdminService} from './admin.service';
@NgModule({
  declarations:[SearchComponent],
  providers:[AdminService],
  exports:[SearchComponent]
})
export class AdminModule{

}
