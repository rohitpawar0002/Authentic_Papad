import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const router=Inject(Router);
  const toaster=Inject(ToastrService)
  const token=localStorage.getItem('token')
  if(!token){
    toaster.warning('User Not Found!','Invalid Login')
    router.navigate(['../login']) 
    return false;
  }
  return true;
};
