import { Component, OnInit } from '@angular/core';
import { WishlistServiceService, UserDTO } from '../wishlist-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewwishlist',
  templateUrl: './viewwishlist.component.html',
  styleUrls: ['./viewwishlist.component.css']
})
export class ViewwishlistComponent implements OnInit {

  constructor(private service:WishlistServiceService,private routing:ActivatedRoute,private router: Router) {}

  user:UserDTO;
  userId:number;
  
  ngOnInit(): void 
 {
   this.service.viewproduct().subscribe(
   response =>this.handleSuccessfulResponse(response),
  );
}
handleSuccessfulResponse(response)
  {
    this.user=response;
  }

  toPrevious()
  {
    this.router.navigate(['/ListProduct']);
  }

}
