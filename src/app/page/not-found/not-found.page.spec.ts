import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotFoundPage } from './not-found.page';
import { TranslateModule } from '@ngx-translate/core';

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundPage ],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forChild()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
