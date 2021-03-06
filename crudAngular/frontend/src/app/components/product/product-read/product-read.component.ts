import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products : Product[];
  paginatedProducts : Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      this.paginatedProducts = products.slice(0, 11);
    })
  }

  load(): Product[] {
    let index : number = this.paginatedProducts.length + 12;
    console.log(index);
    return this.paginatedProducts = this.products.slice(0, index);
  }

}
