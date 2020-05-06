import { Component, OnInit } from '@angular/core';
import { WishlistServiceService, UserDTO } from '../wishlist-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewwishlist',
  templateUrl: './viewwishlist.component.html',
  styleUrls: ['./viewwishlist.component.css']
})
export class ViewwishlistComponent implements OnInit {

  userId:any;
  password:any;
  userName:any;
  user:UserDTO;
  
  constructor(private service:WishlistServiceService,private routing:ActivatedRoute,private router: Router){


    let user=this.routing.snapshot.paramMap.get('userId');
    this.userId=Number(user); /** snapshot returns string */
    this.password=this.routing.snapshot.paramMap.get('password');
    this.userName=this.routing.snapshot.paramMap.get('userName');
    
  }

  ngOnInit(): void 
   { 
   this.service.viewproduct(this.userId).subscribe( 
    response =>this.handleSuccessfulResponse(response),);
  }

  toPrevious()
  {
    this.router.navigate(['/ListProduct',this.userId,this.password,this.userName]);
  }

  handleSuccessfulResponse(response)
  {
    this.user=response;
  }

}
