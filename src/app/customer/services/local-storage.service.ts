import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }
  setItem(key:string, data:string){
    localStorage.setItem(key,data)
  }
  removeItem(key:string){
    localStorage.removeItem(key)
  }
}
