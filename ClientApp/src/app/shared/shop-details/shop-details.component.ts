import { Product } from './../../models/products';
import { ShopServService } from './../shop-serv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';


@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  product!: Product;

  constructor(private shopService: ShopServService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService) {
      this.bcService.set('@shopDetails', ' ')
    }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) this.shopService.getProductDetails(+id).subscribe({
      next: product => {
         this.product = product;
         this.bcService.set('@shopDetails', product.name)
      },
      error: error => console.log(error)
    });
  }

}
