import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  isAuth() {
    if (localStorage.getItem('isAuth')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
