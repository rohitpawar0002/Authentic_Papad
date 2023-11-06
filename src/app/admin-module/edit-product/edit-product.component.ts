import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  editForm!: FormGroup;
  productId: any;
  EditData: any;
  EditProduct = null;

  constructor(
    private fb: FormBuilder,
    private param: ActivatedRoute,
    private httpService: HttpServiceService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      unit: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.productId = this.param.snapshot.paramMap.get('productId');
    if (this.productId) {this.bindValue(this.productId)}

  }

  bindValue(id: any) {
    // TODO: get product from backend and bind values to form
    this.httpService.get(`item/${id}`).subscribe({
      next: (res: any) => {
        this.editForm.patchValue({
          name: res.name,
          description: res.description,
          unit: res.unit,
          price: res.price,
        });
      },
      error: (err) => {
        this.toaster.error(err);
      },
    });
  }

  submit() {
    // TODO: check if productId available then hit update product api
    if (this.productId) {
      this.httpService.patch(`item/${this.productId}`, this.editForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          
          this.toaster.success("product edited successfully!");
          this.router.navigate(["admin/menu"])
        },
        error:(err)=>{}
      });
    }
    else {
      // otherwise hit create product
      this.httpService.post("item", this.editForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          
          this.toaster.success("product added successfully!");
          this.router.navigate(["admin/menu"])
        },
        error:(err)=>{}
      })
    }
  }
}
