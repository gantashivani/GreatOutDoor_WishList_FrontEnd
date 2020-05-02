import { Component, OnInit } from '@angular/core';
import {  WishlistServiceService, Products, ProductsUser } from '../wishlist-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit{
  
  product:Products[];
  data:ProductsUser =new ProductsUser(0,'','',[]);
  listofproducts:Products = new Products(0,'','');
  constructor(private service:WishlistServiceService,private routing:ActivatedRoute,private router: Router) {}

 
 ngOnInit(): void 
 {
   this.service.getproducts().subscribe(
   response =>this.handleSuccessfulResponse(response),
  );
}
  onAdd(products:Products){
    //retriving userdata from login page 
    let user=this.routing.snapshot.paramMap.get('userId');
    
    this.data.userId=Number(user); /** snapshot returns string */
    this.data.password=this.routing.snapshot.paramMap.get('password');
    this.data.userName=this.routing.snapshot.paramMap.get('userName');
    let productid=Math.random()
    this.data.product=[
                {productId : productid,
                        productCatogery:products.productCatogery,
                        productName:products.productName
                        }];

    //this.data = new ProductsUser(userId,pass,userName,this.listofproducts);
    console.log(this.data);
    this.service.onAddToWishList(this.data).subscribe(
      (result)=>{
        if(result!=null)
          alert("Added sucessfully");
        else 
          alert("Add failed");
                }); 
      }

  handleSuccessfulResponse(response)
  {
    this.product=response;
  }

}
