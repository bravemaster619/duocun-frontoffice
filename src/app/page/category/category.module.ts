import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { IonImageModule } from 'src/app/components/ion-image/ion-image.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    LocalValueDirectiveModule,
    IonImageModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
