import { Component, OnInit } from '@angular/core';
import {  WishlistServiceService, Products, ProductsUser } from '../wishlist-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  product:Array<Products>;
  products:Products;
 constructor(private service:WishlistServiceService,private routing:ActivatedRoute,private router: Router) {}

 
 ngOnInit(): void 
 {
   this.service.getproducts().subscribe(
   response =>this.handleSuccessfulResponse(response),
  );
}
  onAdd(products:Products){
    let user=this.routing.snapshot.paramMap.get('userId');
    let userId=Number(user);
    console.log(products);
    let pass=this.routing.snapshot.paramMap.get('password');
    let userName=this.routing.snapshot.paramMap.get('userName');
    this.product.push.apply({productId:'products.productId',productCatogery:'products.productCatogery',productName:'products.productName'});
    let data = new ProductsUser(userId,pass,userName,this.product);
    console.log(data);
    this.service.onAddToWishList(data).subscribe((result)=>{
  alert(result)}); 
  }

  handleSuccessfulResponse(response)
  {
    this.product=response;
  }

}
