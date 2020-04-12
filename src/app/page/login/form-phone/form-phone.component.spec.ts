import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormPhoneComponent } from './form-phone.component';
import { TranslateModule } from '@ngx-translate/core';

describe('FormPhoneComponent', () => {
  let component: FormPhoneComponent;
  let fixture: ComponentFixture<FormPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPhoneComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
