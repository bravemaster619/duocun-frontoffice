import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountPageRoutingModule } from './my-account-routing.module';

import { MyAccountPage } from './my-account.page';
import { SideMenuModule } from 'src/app/component/side-menu/side-menu.module';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';
import * as Config from 'src/assets/config.json';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAccountPageRoutingModule,
    SideMenuModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      //@ts-ignore
      apiKey: process.env.NODE_ENV === "production" ? Config.production.MAP_KEY : Config.development.MAP_KEY,
      libraries: ['places']
    }),
  ],
  declarations: [MyAccountPage]
})
export class MyAccountPageModule {}
