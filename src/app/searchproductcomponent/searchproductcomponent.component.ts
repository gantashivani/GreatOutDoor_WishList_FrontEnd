import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { WishlistServiceService, Products, ProductsUser } from '../wishlist-service.service';

@Component({
  selector: 'app-searchproductcomponent',
  templateUrl: './searchproductcomponent.component.html',
  styleUrls: ['./searchproductcomponent.component.css']
})
export class SearchproductcomponentComponent implements OnInit {

category: string;
  productlist: Products[];
mstatus:boolean;
   constructor(private service:WishlistServiceService,private router: Router){
   this.mstatus=false;
   }

  ngOnInit(): void {
  }
  onSubmitSearch(category: string) {
    this.service.onSubmitSearch(category).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    console.log(response);
    this.productlist = response;
    this.mstatus=true;
  }

}
