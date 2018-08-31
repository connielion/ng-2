import { Injectable } from '@angular/core';
import { ApiserviceService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private api: ApiserviceService) { }

  getAllProd() {
    return this.api.get('/getProd');
  }
  
}
