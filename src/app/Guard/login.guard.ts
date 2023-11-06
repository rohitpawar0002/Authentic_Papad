import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const toaster = inject(ToastrService);
  const token = localStorage.getItem('access-token');

  if (token) {
    toaster.success("User Found!","You have already login");
    router.navigate(['admin/menu']);
    return true;
  }
  return true;
};
