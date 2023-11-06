import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/customer/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalItem:number=0;
  constructor(private cartService:CartService, private toster:ToastrService){}

  ngOnInit():void{
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
  }

  loggedin(){
    return localStorage.getItem('token');
  }
  
   onLogout(){
    localStorage.removeItem('token')
    this.toster.success('Logout')
   }
}
