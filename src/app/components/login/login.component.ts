import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateManager } from '../../classes/error-state-manager';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router ) { }

  authUser = {
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
    ])
  };

  matcher = new ErrorStateManager();
  invalidLogin: boolean;

  login(credentials) {
    // this.userService.login(this.authUser);
    this.authService.login(credentials).subscribe(
      result => {
        if (result) {

          this.router.navigate(['/']);
        } else {
          this.invalidLogin = true;
        }
      }
    );
  }

  ngOnInit() {
  }

}
