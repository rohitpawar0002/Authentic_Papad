import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const toaster = inject(ToastrService);
  const token = localStorage.getItem('access-token');

  if (!token) {
    toaster.warning("User Not Found!","Please login!");
    router.navigate(['admin/login']);
    return false;
  }
  return true;
};
