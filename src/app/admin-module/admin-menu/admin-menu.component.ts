import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartModalComponent } from 'src/app/CartModal/cart-modal.component';
import { OrderDetailsService } from 'src/app/customer/services/order-details.service';
@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {
  constructor(
    private service: OrderDetailsService,
    private modalService: NgbModal,
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

  }
}
