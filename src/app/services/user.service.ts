import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { ApiserviceService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

import { LocalStorageService } from '../services/local-storage.service';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profileUrl: string;
  currentProfile: Iuser;

  constructor(private api: ApiserviceService, private router: Router, private localStorage: LocalStorageService, private route: ActivatedRoute) { }

// register()
  register(user: User) {
    return this.api.post('/postUser', user).subscribe((res: any) => {

       // this.localStorage.set('currentUser', res.user);
        this.router.navigateByUrl('/');
    }, err => console.log('There was an error!!'), () => this.router.navigateByUrl('/')
  );
  }

// login()
login(user: any) {
  return this.api.post('api/authenticate', user).subscribe((res: any) => {
   // this.localStorage.set('currentUser', res.user);
    this.router.navigateByUrl('/');
  }, err => console.log(err), () => this.router.navigateByUrl('/')
);
}

// logout()
logout() {
  this.localStorage.remove('currentUser');
  this.router.navigateByUrl('/logout');
}

getUser(_id) {
  return this.api.get(`/user/${_id}`);
}

getAllUsers() {
  return this.api.get('/getAllUsers');
}

getProfileUrl() {
  console.log(this.route.snapshot.url);
}

}
