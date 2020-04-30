import { Component, OnInit } from '@angular/core';
import { WishlistServiceService, UserDTO } from '../wishlist-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     
     details:UserDTO

  constructor(private service:WishlistServiceService , private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit(user:UserDTO):void{
    console.log(user)
    this.service.validateUser(user.userId).subscribe(
    (data)=>{
      this.details =data
      console.log("returened"+this.details)
    if (this.details == null) {
     alert("Invalid username/password ");
     }
     else {
       this.router.navigate(['/ListProduct', this.details.userId, this.details.password,this.details.userName]);
       } 
    }
    );
  } 
}
