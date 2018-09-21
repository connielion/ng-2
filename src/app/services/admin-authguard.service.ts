import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguardService {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate() {
    if (this.auth.currentUser && this.auth.currentUser.admin) {
      return true;
    } else {
      this.router.navigate(['/not-found']);
      return false;
    }
  }
}
