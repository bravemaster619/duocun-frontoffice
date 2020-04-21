import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { TranslateModule } from '@ngx-translate/core';

import { FormUsernameComponent } from './form-username/form-username.component';
import { FormPhoneComponent } from './form-phone/form-phone.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginPage,
        FormPhoneComponent,
        FormUsernameComponent
      ],
      imports: [
        RouterModule.forRoot([]),
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        HttpClientModule,
        IonicStorageModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
