import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class httpInterceptor implements HttpInterceptor {

  constructor(private router: Router, private storageService: LocalStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.storageService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
      },
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.storageService.removeToken();
            const parent = (this.router.routerState.snapshot.url).includes("admin")
              ? "admin" : "customer";
            this.router.navigate([parent, '/auth/login']);
          }
        }
        return throwError(() => new Error(err?.error?.message || 'Error occurred!'));
      })
    );
  }
}
