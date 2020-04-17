import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    TranslateModule,
    IonicStorageModule
  ],
  declarations: [ SideMenuComponent ],
  exports: [ SideMenuComponent ]
})
export class SideMenuModule {}