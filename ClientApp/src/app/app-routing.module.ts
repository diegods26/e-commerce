import { AuthGuard } from './components/core/guards/auth.guard';
import { ServerErrorComponent } from './components/core/server-error/server-error.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { TestErrorComponent } from './components/core/test-error/test-error.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'test-error', component: TestErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'shop', loadChildren: () => import('./shared/shop.module').then(m => m.ShopModule)},
  {path: 'basket', loadChildren: () => import('./shared/basket/basket.module').then(m => m.BasketModule)},
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadChildren: () => import('./shared/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {path: 'account', loadChildren: () => import('./components/account/account.module').then(m => m.AccountModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
