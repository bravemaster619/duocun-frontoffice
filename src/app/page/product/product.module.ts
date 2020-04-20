import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { TranslateModule } from '@ngx-translate/core';
import { TouchspinModule } from 'src/app/component/touchspin/touchspin.module';
import { PricePipeModule } from 'src/app/pipe/price.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    IonImageModule,
    LocalValueDirectiveModule,
    TranslateModule,
    TouchspinModule,
    PricePipeModule
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}
