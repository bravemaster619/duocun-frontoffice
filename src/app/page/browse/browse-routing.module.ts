import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowsePage } from './browse.page';
import { CategoryPage } from '../category/category.page';


const routes: Routes = [
  {
    path: 'category',
    children: [{
      path: ':id',
      loadChildren: 'src/app/page/category/category.module#CategoryPageModule'
    }]
  },
  {
    path: '',
    component: BrowsePage,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class BrowsePageRoutingModule {}
