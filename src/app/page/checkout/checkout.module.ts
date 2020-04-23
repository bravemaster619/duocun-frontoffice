import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { TranslateModule } from '@ngx-translate/core';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { PricePipeModule } from 'src/app/pipe/price/price.module';
import { AgmCoreModule } from '@agm/core';
import { StripeModule } from 'stripe-angular';
import * as Config from 'src/assets/config.json';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPageRoutingModule,
    TranslateModule.forChild(),
    IonImageModule,
    LocalValueDirectiveModule,
    PricePipeModule,
    AgmCoreModule.forRoot({
      //@ts-ignore
      apiKey: process.env.NODE_ENV === "production" ? Config.production.MAP_KEY : Config.development.MAP_KEY,
      libraries: ['places']
    }),
    StripeModule.forRoot(
      //@ts-ignore
      process.env.NODE_ENV === "production" ? Config.production.STRIPE_KEY : Config.development.STRIPE_KEY
    )
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
