import { Component, ElementRef, Input } from '@angular/core';
import { faL, faLadderWater } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../customer/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css'],
})
export class ModalboxComponent {
  @Input() item: any;

quantityForm!:FormGroup;
  submitted=false;

  showTextBox: boolean = false;
  calculateQuPrice:any;
  isDropdownVisible: boolean = true;
  dropdownvalues: any = [];
  packetOptions = [{option:'1',value:1},{option:'2',value:2},{option:'3',value:3},{option:'4',value:4},{option:'5',value:5},{option:'custom',value:'custom'}];
  kgOptions = [{option:'1/2', value:0.5},{option:'1',value:1},{option:'2',value:2},{option:'3',value:3},{option:'4',value:4},{option:'5',value:5},{option:'custom',value:'custom'}];
  constructor(
    public activeModal: NgbActiveModal,
    private cartService: CartService,
    private toastr: ToastrService,
    private fb : FormBuilder
  ) {}

  ngOnInit(): void {
    this.quantityForm = this.fb.group({
      inputQuantity:[,Validators.required]
    }) 
    this.dropdownvalues = this.item.unit === 'kg' ? this.kgOptions : this.packetOptions;
  }

  get inputQuantity() {
    return this.quantityForm.controls["inputQuantity"]
  }

  quantitySelected(e: any) {
    if (e === 'custom') {
      this.isDropdownVisible = false;
      this.showTextBox = true;
      this.quantityForm.controls["inputQuantity"].patchValue('')
    }
    this.calculateQuPrice = this.inputQuantity.value * this.item.foodPrice
  }

   onSubmit(){
    this.submitted=true;

    if(this.quantityForm.invalid){
      this.toastr.error('In dropdown or text box','Please select quantity!')
    return;
    }
    this.item.quantity = this.inputQuantity.value
    this.item.price = this.calculateQuPrice
    this.toastr.success('Please check bucket', 'Added Sucessfully!');
   
    this.cartService.addtoCart(this.item);

   }
}
