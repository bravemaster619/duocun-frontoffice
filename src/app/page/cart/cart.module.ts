import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuModule } from 'src/app/component/side-menu/side-menu.module';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { PricePipeModule } from 'src/app/pipe/price/price.module';
import { TouchspinModule } from 'src/app/component/touchspin/touchspin.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    TranslateModule,
    SideMenuModule,
    IonImageModule,
    LocalValueDirectiveModule,
    PricePipeModule,
    TouchspinModule
  ],
  declarations: [
    CartPage
  ]
})
export class CartPageModule {}
