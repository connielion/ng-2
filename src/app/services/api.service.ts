import { Injectable } from '@angular/core';

// import HttpMod
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  // private apiUrl = 'https://jordomav.ngrok.io';
  private apiUrl = 'https://1952ffa4.ngrok.io';

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(`${this.apiUrl}${url}`);
  }

  post(url, data) {
    return this.http.post(`${this.apiUrl}${url}`, data);
  }



}
