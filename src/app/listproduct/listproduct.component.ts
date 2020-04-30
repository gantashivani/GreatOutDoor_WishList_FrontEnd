import { Component, OnInit } from '@angular/core';
import {  WishlistServiceService, Products } from '../wishlist-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  product:Products[];

 constructor(private service:WishlistServiceService,private router: Router) {}

 
 ngOnInit(): void 
 {
   //let id= this.router.snapshot.paramMap.get('')
   this.service.getproducts().subscribe(
   response =>this.handleSuccessfulResponse(response),
  );
}
  onAdd(product:Products){
    this.service.onAddToWishList(product); 
  }

  handleSuccessfulResponse(response)
  {
    this.product=response;
  }

}
