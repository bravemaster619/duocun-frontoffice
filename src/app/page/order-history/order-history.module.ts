import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { PricePipeModule } from 'src/app/pipe/price/price.module';
import { OrderHistoryPageRoutingModule } from './order-history-routing.module';

import { OrderHistoryPage } from './order-history.page';
import { MomentPipeModule } from 'src/app/pipe/moment/moment.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryPageRoutingModule,
    TranslateModule.forChild(),
    PricePipeModule,
    MomentPipeModule
  ],
  declarations: [OrderHistoryPage]
})
export class OrderHistoryPageModule {}
