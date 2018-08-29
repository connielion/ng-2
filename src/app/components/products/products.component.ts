import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  getAllUsers() {
    this.productService.getAllProd().subscribe((res: any) => {
      console.log(res);
     this.product = res;
    });
  }

  ngOnInit() {
  }

}
