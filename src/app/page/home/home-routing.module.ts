import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [{
  path: 'tabs',
  component: HomePage,
  children: [{
    path: 'browse',
    children: [{
      path: 'product',
      children: [{
        path: ':id',
        loadChildren: 'src/app/page/product/product.module#ProductPageModule'
      }]
    }, {
      path: '',
      loadChildren: 'src/app/page/browse/browse.module#BrowsePageModule'
    }]
  }, {
    path: 'cart',
    children: [{
      path: '',
      loadChildren: 'src/app/page/cart/cart.module#CartPageModule'
    }]
  }, {
    path: 'my-account',
    children: [{
      path: '',
      loadChildren: 'src/app/page/my-account/my-account.module#MyAccountPageModule'
    }]
  }, {
    path: '',
    redirectTo: '/tabs/browse',
    pathMatch: 'full'
  }]
}, {
  path: 'checkout',
  component: HomePage,
  children: [{
    path: '',
    loadChildren: 'src/app/page/checkout/checkout.module#CheckoutPageModule'
  }]
}, {
  path: 'order-history',
  component: HomePage,
  children: [{
    path: '',
    loadChildren: 'src/app/page/order-history/order-history.module#OrderHistoryPageModule'
  }]
}, {
  path: '',
  redirectTo: '/tabs/browse',
  pathMatch: 'full'
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageRoutingModule {}