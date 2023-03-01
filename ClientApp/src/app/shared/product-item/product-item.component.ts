import { BasketService } from './../basket/basket.service';
import { Product } from './../../models/products';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product?: Product;

  constructor(private basketService: BasketService) {}

  addItemToBasket(){
    this.product && this.basketService.addItemToBasket(this.product);
  }

}
