import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuModule } from 'src/app/component/side-menu/side-menu.module';
import { QuantityPipeModule } from 'src/app/pipe/quantity/quantity.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, 
    TranslateModule,
    SideMenuModule,
    QuantityPipeModule
  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {}
