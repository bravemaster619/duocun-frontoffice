import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormUsernameComponent } from './form-username.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { RouterModule } from '@angular/router';

describe('FormUsernameComponent', () => {
  let component: FormUsernameComponent;
  let fixture: ComponentFixture<FormUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUsernameComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot(),
        HttpClientModule,
        IonicStorageModule.forRoot(),
        RouterModule.forRoot([])
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
