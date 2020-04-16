import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [ SideMenuComponent ],
  exports: [ SideMenuComponent ]
})
export class SideMenuModule {}