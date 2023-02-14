import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './pagin-header/paging-header.component';
import { PagerComponent } from './pager/pager.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    PagingHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports:[
    ShopComponent,
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent
  ]
})
export class ShopModule { }
