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

@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    PagingHeaderComponent,
    PagerComponent,
    ShopDetailsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    RouterModule,
    ShopRoutingModule,
    CarouselModule.forRoot()
  ],
  exports:[
    ShopComponent,
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    ShopDetailsComponent,
    CarouselModule
  ]
})
export class ShopModule { }
