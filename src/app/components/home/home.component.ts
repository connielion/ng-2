import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private app = 'mean.';


  constructor(private localStorage: LocalStorageService ) { }


  ngOnInit() {
    this.localStorage.set('currentUser', {name: 'Connie', age: 23});
    console.log('Before removal', this.localStorage.get('currentUser'));
    this.localStorage.remove('currentUser');
    console.log('After Removal', this.localStorage.get('currentUser'));
  }


}
