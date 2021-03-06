import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ViewwishlistComponent } from './viewwishlist/viewwishlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchproductcomponentComponent } from './searchproductcomponent/searchproductcomponent.component';
import { FilterproductcomponentComponent } from './filterproductcomponent/filterproductcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ListproductComponent,
    ViewwishlistComponent,
    LoginComponent,
    SearchproductcomponentComponent,
    FilterproductcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
