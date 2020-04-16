import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { BottomNavsComponent } from 'src/app/components/bottom-navs/bottom-navs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    TranslateModule.forChild()
  ],
  declarations: [
    HomePage,
    SideMenuComponent,
    BottomNavsComponent
  ]
})
export class HomePageModule {}
