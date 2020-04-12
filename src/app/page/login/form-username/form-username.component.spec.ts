import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormUsernameComponent } from './form-username.component';
import { TranslateModule } from '@ngx-translate/core';

describe('FormUsernameComponent', () => {
  let component: FormUsernameComponent;
  let fixture: ComponentFixture<FormUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUsernameComponent ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot()
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
