import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  baseurl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}
  
  get(url: string, options: any = {}) {
    return this.http.get(this.baseurl + url, options);
  }
  
  post(url: string, body: any, options: any = {}) {
    return this.http.post(this.baseurl + url, body, options);
  }
  
  delete(url: string, options: any = {}) {
    return this.http.delete(`${this.baseurl}${url}`, options);
  }
 
  put(url: string, body: any, options: any = {}) {
    return this.http.put(this.baseurl + url, body, options);
  }
 
  patch(url: string, body: any, options: any = {}) {
    return this.http.patch(this.baseurl + url, body, options);
  }

 
}
