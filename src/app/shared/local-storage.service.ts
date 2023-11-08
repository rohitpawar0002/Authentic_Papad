import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(private router: Router) {
   }
  setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  getToken() {
    const token = (this.router.routerState.snapshot.url).includes("admin")
      ? "access-token" : "token";
       return localStorage.getItem(token);
  }

  removeToken() {
    const token = (this.router.routerState.snapshot.url).includes("admin")
      ? "access-token" : "token";
    return this.removeItem(token);
  }
 
}
