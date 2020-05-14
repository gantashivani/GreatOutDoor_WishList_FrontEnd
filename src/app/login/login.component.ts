import { Component, OnInit } from '@angular/core';
import { WishlistServiceService, UserDTO } from '../wishlist-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     
     details:UserDTO=new UserDTO(0,'','');
	 user:UserDTO=new UserDTO(0,'','');
   
  constructor(private service:WishlistServiceService , private router: Router) { }
  
  ngOnInit(): void {
 
	}

  onSubmit(user:UserDTO):void{
    console.log(user)
    this.service.validateUser(user.userId).subscribe(
	(data)=>{
	console.log(data);
	if(data == "Login Sucessfull"){
		alert(data);
		this.router.navigate(['/ListProduct',user.userId,user.password,user.userName]);}
	else 
		alert("Invalid userId/userName/password");
	}
	);}
}