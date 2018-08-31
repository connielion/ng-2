import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';


@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private app = 'mean.';


  constructor(private token: TokenService) { }
/*
  genLocalandSession() {
    this.token.generateToken(true);

  }

  genSession() {
    this.token.generateToken(false);
  }
  */
 genToken(val) {
   this.token.generateToken(val);
 }

  ngOnInit() {

  }


}
