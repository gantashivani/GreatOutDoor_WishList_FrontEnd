import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ViewwishlistComponent } from './viewwishlist/viewwishlist.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'app-viewwishlist',component:ViewwishlistComponent},
  {path:'ListProduct/:userId/:password/:userName',component:ListproductComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
