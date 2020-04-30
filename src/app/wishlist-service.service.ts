import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {
  user: any;

  constructor(private http:HttpClient) { }
  product:Products[];
  userdata:UserDTO;

  public getproducts(){
    console.log("testing");
    return this.http.get<Products[]>("http://localhost:2021/WishList/ViewProducts");
  }
   
  public onAddToWishList(product: Products) {
    console.log(product);
    return this.http.post<UserDTO>("http://localhost:2021/AddToWishList/Add",product);
  }
  
  public validateUser(userId) {
    console.log(userId)
    return this.http.get<UserDTO>("http://localhost:2001/Login/ValidateUser/"+userId,{responseType:'json'});
  }

  public viewproduct(userId:any) {
    console.log("inservice");
    return this.http.get<UserDTO>("http://localhost:1004/WishList/ViewWishList/"+userId);
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
  productCatogery:string;
  productName:string;

  constructor(productId:number,productCatogery:string,productName:string)
  {
    this.productId=productId;
    this.productCatogery=productCatogery;
    this.productName=productName;
  }
}