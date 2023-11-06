import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';
import { CartService } from 'src/app/customer/services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartModalComponent } from 'src/app/CartModal/cart-modal.component';
import { HttpServiceService } from '../../services/http-service.service';
import { ToastrService } from 'ngx-toastr';


declare var window: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    private service: OrderDetailsService,
    private modalService: NgbModal,
    private cartService:CartService,
    private httpService:HttpServiceService,
    private toaster:ToastrService
    
  ) {}
  foodData: any;
  fd: any;
  formModal: any;
 

  openModal(item:any) {
    const modalRef = this.modalService.open(CartModalComponent);
		modalRef.componentInstance.item = item;
   }
  
 ngOnInit(): void {
 this.foodData = this.service.foodDetails;
this.httpService.get("item").subscribe({
  next:(res)=>{
console.log(res);

  },
  error:(err)=>{
    this.toaster.error("Porducts Fecting failed!")
  }
})
    
  }
}

//showMessage = false;
//showSuccessMessage() {
//this.showMessage = true;
//}
