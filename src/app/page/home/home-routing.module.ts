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
        loadChildren: '../product/product.module#ProductPageModule'
      }]
    }, {
      path: '',
      loadChildren: '../browse/browse.module#BrowsePageModule'
    }]
  }, {
    path: 'cart',
    children: [{
      path: '',
      loadChildren: '../cart/cart.module#CartPageModule'
    }]
  }, {
    path: 'my-account',
    children: [{
      path: '',
      loadChildren: '../my-account/my-account.module#MyAccountPageModule'
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
    loadChildren: '../checkout/checkout.module#CheckoutPageModule'
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