import { BasketRoutingModule } from './basket-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { ShopModule } from '../shop.module';




@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    ShopModule
  ]
})
export class BasketModule { }
