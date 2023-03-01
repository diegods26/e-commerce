import { BasketService } from './../basket/basket.service';
import { Product } from './../../models/products';
import { ShopServService } from './../shop-serv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { take } from 'rxjs';


@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  product!: Product;
  quantity = 1;
  quantityInBasket = 0;

  constructor(private shopService: ShopServService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basketService: BasketService) {
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
         this.bcService.set('@shopDetails', product.name);
         this.basketService.basketSource$.pipe(take(1)).subscribe({
          next: basket => {
            const item = basket?.items.find(x => x.id === +id);
            if(item){
              this.quantity = item.quantity;
              this.quantityInBasket = item.quantity;
            }
          }
         })
      },
      error: error => console.log(error)
    });
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    this.quantity--;
  }

  updateBasket(){
    if(this.product){
      if(this.quantity > this.quantityInBasket){
        const itemsToAdd = this.quantity - this.quantityInBasket;
        this.quantityInBasket += itemsToAdd;
        this.basketService.addItemToBasket(this.product, itemsToAdd);
      } else {
        const itemsToRemove = this.quantityInBasket - this.quantity;
        this.quantityInBasket -= itemsToRemove;
        this.basketService.removeItemFromBasket(this.product.id, itemsToRemove);
      }
    }
  }

  get buttonText(){
    return this.quantityInBasket === 0 ? 'Add to basket' : 'Update basket';
  }

}
