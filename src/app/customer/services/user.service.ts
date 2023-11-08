import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private User$ = new BehaviorSubject<any>({});
  constructor(private http: HttpServiceService, private toaster: ToastrService) { }

  getUser() {
    return this.User$.asObservable();
  }
  setUser(user: any) {
    this.User$.next(user);
  }

  getCurrentUser() {
    this.http.get('user').subscribe({
      next: (res: any) => {
        this.setUser(res?.user);
      },
      error: (err) => {
        this.toaster.error('error while fetching user', err.message);
      },
    });
  }
}
