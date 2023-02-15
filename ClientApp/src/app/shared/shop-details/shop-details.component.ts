import { Product } from './../../models/products';
import { ShopServService } from './../shop-serv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  product!: Product;

  constructor(private shopService: ShopServService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) this.shopService.getProductDetails(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    });
  }

}
