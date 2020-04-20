import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    TranslateModule,
    IonicStorageModule,
    LocalValueDirectiveModule
  ],
  declarations: [ SideMenuComponent ],
  exports: [ SideMenuComponent ]
})
export class SideMenuModule {}