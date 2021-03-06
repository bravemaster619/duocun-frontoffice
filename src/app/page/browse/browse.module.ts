import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsePageRoutingModule } from './browse-routing.module';

import { BrowsePage } from './browse.page';
import { TranslateModule } from '@ngx-translate/core';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { PricePipeModule } from 'src/app/pipe/price/price.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsePageRoutingModule,
    TranslateModule.forChild(),
    IonImageModule,
    LocalValueDirectiveModule,
    PricePipeModule
  ],
  declarations: [
    BrowsePage
  ]
})
export class BrowsePageModule {}
