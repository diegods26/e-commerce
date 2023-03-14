import { ShopRoutingModule } from './shop-routing.module';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './pagin-header/paging-header.component';
import { PagerComponent } from './pager/pager.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    PagingHeaderComponent,
    PagerComponent,
    ShopDetailsComponent,
    OrderTotalsComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    RouterModule,
    ShopRoutingModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  exports:[
    ShopComponent,
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    ShopDetailsComponent,
    CarouselModule,
    OrderTotalsComponent,
    ReactiveFormsModule,
    BsDropdownModule,
    TextInputComponent
  ]
})
export class ShopModule { }
