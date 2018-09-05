import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Iuser } from '../../../interfaces/iuser';
import { Message } from '../../../classes/message';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.scss']
})
export class ProfileContactComponent implements OnInit {

  currentProfile: Iuser = this.userService.currentProfile;

  message: Message = new Message();

  constructor(private userService: UserService, private localStorage: LocalStorageService) { }

  sendMessage() {
    const sender = `${this.localStorage.get('currentUser').firstName} ${this.localStorage.get('currentUser').lastName}`;
    this.message.sender = sender;
    console.log(this.message);
  }

  ngOnInit() {
  }

}
