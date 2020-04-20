import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category.page';
import { CommonModule } from '@angular/common';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule } from '@ngx-translate/core';

describe('CategoryPage', () => {
  let component: CategoryPage;
  let fixture: ComponentFixture<CategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPage ],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        LocalValueDirectiveModule,
        IonImageModule,
        RouterModule.forRoot([]),
        HttpClientModule,
        IonicStorageModule.forRoot(),
        TranslateModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
