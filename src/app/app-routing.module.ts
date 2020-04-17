import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./page/product/product.module').then( m => m.ProductPageModule)
  },
  // {
  //   path: 'browse',
  //   loadChildren: () => import('./page/browse/browse.module').then( m => m.BrowsePageModule)
  // },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('./page/cart/cart.module').then( m => m.CartPageModule)
  // },
  // {
  //   path: 'my-account',
  //   loadChildren: () => import('./page/my-account/my-account.module').then( m => m.MyAccountPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
