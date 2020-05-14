import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {
 
  constructor(private http:HttpClient) { }
  
  user: any;
  product:Products[];
  userdata:UserDTO;

  public getproducts(){
    console.log("testing");
    return this.http.get<Products[]>("http://localhost:1002/WishList/ViewProducts");
  }
   
  public onAddToWishList(data: ProductsUser) {
    console.log(data);
    return this.http.post<ProductsUser>("http://localhost:2021/AddToWishList/Add",data,{responseType:'json'});
  }
  
  public validateUser(userId) {
    console.log(userId)
    return this.http.get("http://localhost:2001/Login/ValidateUser/"+userId,{responseType:'text'});
  }

  public viewproduct(user:number) {
    console.log("inservice");
    return this.http.get<UserDTO>("http://localhost:1004/WishList/ViewWishList/"+user,{responseType:'json'});
  }
  public onSubmitSearch(catogery:string) {
    console.log("inservice"+catogery);
    return this.http.get<Products>("http://localhost:1002/WishList/SearchProducts/"+catogery);
  }
  public getProductsData(minprice:number,maxprice:number)
  {
	  console.log("inservice");
    return this.http.get<Products>("http://localhost:1002/WishList/FilterProducts/"+minprice+"/"+maxprice);
  }	
}

export class UserDTO
{
  userId:number;
  password:string;
  userName:string;
  constructor(userId:number,password:string,userName:string)
  {
    this.userId=userId;
    this.password=password;
    this.userName=userName; 
  }
}

export class Products
{
 productId:number;
prize:number;
colour:string;
dimensions:string;
specifications:string;
manufacture:string;
quantity:number;
productCatogery:string;
productName:string;
retailerId:number;

constructor(productId:number, productCatogery:string, productName:string,prize:number, colour:string,dimensions:string,specifications:string,manufacture:string,quantity:number,retailerId:number)
  {
	this.productId = productId;
	this.prize = prize;
	this.colour = colour;
	this.dimensions = dimensions;
	this.specifications = specifications;
	this.manufacture = manufacture;
	this.quantity = quantity;
	this.productCatogery = productCatogery;
	this.productName = productName;
	this.retailerId = retailerId;
  }
}

export class ProductsUser
{
  userId:number;
  password:string;
  userName:string;
  product:Products[];

  constructor(userId:number,password:string,userName:string,product:Products[])
  {
    this.userId=userId;
    this.password=password;
    this.userName=userName;
    this.product=product;
  }
}