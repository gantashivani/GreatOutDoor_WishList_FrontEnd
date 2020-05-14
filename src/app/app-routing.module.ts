import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ViewwishlistComponent } from './viewwishlist/viewwishlist.component';
import { SearchproductcomponentComponent } from './searchproductcomponent/searchproductcomponent.component';
import { FilterproductcomponentComponent } from './filterproductcomponent/filterproductcomponent.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'app-viewwishlist/:userId/:password/:userName',component:ViewwishlistComponent},
  {path:'ListProduct/:userId/:password/:userName',component:ListproductComponent},
  {path:'SearchProduct',component:SearchproductcomponentComponent},
  {path:'FilterProduct',component:FilterproductcomponentComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
