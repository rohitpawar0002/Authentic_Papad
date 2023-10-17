import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalboxComponent } from 'src/app/modalbox/modalbox.component';
import { CartService } from 'src/app/customer/services/cart.service';
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
    private cartService:CartService

    
  ) {}
  foodData: any;
  fd: any;
  formModal: any;
 

  openModal(item:any) {
    const modalRef = this.modalService.open(ModalboxComponent);
		modalRef.componentInstance.item = item;
   
  }
  
   ngOnInit(): void {
    this.foodData = this.service.foodDetails;

    
  }
}
