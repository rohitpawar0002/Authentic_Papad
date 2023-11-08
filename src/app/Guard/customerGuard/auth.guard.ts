import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const toaster=inject(ToastrService)
  const token=localStorage.getItem('token')
  if(!token){
    toaster.warning('User Not Found!','Invalid Login')
    router.navigate(['customer/auth/login']) 
    return false;
  }
  return true;
};
