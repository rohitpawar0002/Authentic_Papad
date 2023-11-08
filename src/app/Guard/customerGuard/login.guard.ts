import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const loginGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const toaster=inject(ToastrService)
  const token=localStorage.getItem('token')
  if(token){
    toaster.success('User Found!','You have already login');
    router.navigate(['/'])
    return true;
  }
  return true;
};
