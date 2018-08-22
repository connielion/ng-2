import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService) { }

  authUser = {
    email: '',
    password: ''
  };



  login() {
    this.userService.login(this.authUser);
  }

  ngOnInit() {
  }

}
