import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../../interfaces/iuser';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnInit {

  currentProfile: Iuser = this.userService.currentProfile;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
