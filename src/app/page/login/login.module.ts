import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { FormUsernameComponent } from './form-username/form-username.component';
import { FormPhoneComponent } from './form-phone/form-phone.component';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild([]),
    IonicStorageModule.forRoot(),
    LoginPageRoutingModule
  ],
  exports: [
    FormPhoneComponent,
    FormUsernameComponent
  ],
  declarations: [
    LoginPage,
    FormPhoneComponent,
    FormUsernameComponent,
  ]
})
export class LoginPageModule {}
