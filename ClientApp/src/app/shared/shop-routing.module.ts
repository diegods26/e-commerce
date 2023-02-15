import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';

const routes: Routes = [
  {path: '', component: ShopComponent},
  {path: ':id', component: ShopDetailsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
