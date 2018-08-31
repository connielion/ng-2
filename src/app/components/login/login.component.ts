import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateManager } from '../../classes/error-state-manager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService) { }

  authUser = {
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  };



  matcher = new ErrorStateManager();

  login() {
    this.userService.login(this.authUser);
  }

  ngOnInit() {
  }

}
