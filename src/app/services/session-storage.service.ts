import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private app = 'mean.';

  constructor() { }
// method
  set(key, data) {
    localStorage.setItem(`${this.app}${key}`, JSON.stringify(data));
  }

  get(key) {
    return JSON.parse(localStorage.getItem(`${this.app}${key}`));
  }

  remove(key) {
    return localStorage.removeItem(`${this.app}${key}`);
  }

}
