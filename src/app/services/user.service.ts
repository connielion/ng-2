import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { ApiserviceService } from '../services/api.service';
import { Router } from '@angular/router';

import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiserviceService, private router: Router, private localStorage: LocalStorageService) { }

// register()
  register(user: User) {
    return this.api.post('/postUser', user).subscribe((res: any) => {

        this.localStorage.set('currentUser', res.user);
        this.router.navigateByUrl('/');
    });
  }

// login()
login(user: any) {
  return this.api.post('userLogin/', user).subscribe((res: any) => {
    this.localStorage.set('currentUser', res.user);
    this.router.navigateByUrl('/');
  });
}

getAllUsers() {
  return this.api.get('/getAllUsers');
}

}
