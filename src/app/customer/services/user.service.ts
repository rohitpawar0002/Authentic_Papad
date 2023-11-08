import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private User$ = new BehaviorSubject<any>({});
  constructor() {}

  public getUser() {
    return this.User$.asObservable();
  }
  public setUser(user: any) {
    this.User$.next(user);
  }
}
