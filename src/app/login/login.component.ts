import { Component, OnInit } from '@angular/core';
import { WishlistServiceService, UserDTO } from '../wishlist-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     
	 result:any;
     details:UserDTO=new UserDTO(0,'','');
	 user:UserDTO=new UserDTO(0,'','');
   
  constructor(private service:WishlistServiceService , private router: Router) { }
  
  ngOnInit(): void {
 
	}

  onSubmit(user:UserDTO):void{
    console.log(user.password)
    this.service.validateUser(user.userId,user.password).subscribe(
	(data)=>{
	if(data != "Login Sucessfull"){
	alert("Invalid userId/userName/password");}
	else {
		alert(data);
		this.router.navigate(['/ListProduct',user.userId,user.password,user.userName]);
	}	
	}
	);}
}