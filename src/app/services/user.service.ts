import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { ApiserviceService } from '../services/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiserviceService, private router: Router) { }

// register()
  register(user: User) {
    return this.api.post('/postUser', user).subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/');
    });
  }

// login()
login(user: any) {
  return this.api.post('userLogin/', user).subscribe((res) => {
    this.router.navigateByUrl('/');
  });
}

getAllUsers() {
  return this.api.get('/getAllUsers');
}

}
