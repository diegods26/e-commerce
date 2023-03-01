import { BasketItem } from './../../models/basket';
import { BasketService } from './../../shared/basket/basket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(public basketService: BasketService) {}

  getCount(items: BasketItem[]){
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

}
