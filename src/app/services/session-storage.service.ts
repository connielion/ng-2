import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private app = 'mean.';

  // session storage ~ incognito mode in chrome, data will be gone after closing browser
  constructor() { }
// method
  set(key, data) {
    sessionStorage.setItem(`${this.app}${key}`, JSON.stringify(data));
  }

  get(key) {
    return JSON.parse(sessionStorage.getItem(`${this.app}${key}`));
  }

  remove(key) {
    return sessionStorage.removeItem(`${this.app}${key}`);
  }

}
