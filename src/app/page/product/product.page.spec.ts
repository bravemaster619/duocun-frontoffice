import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductPage } from './product.page';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { TouchspinModule } from 'src/app/component/touchspin/touchspin.module';
import { PricePipeModule } from 'src/app/pipe/price/price.module';

describe('ProductPage', () => {
  let component: ProductPage;
  let fixture: ComponentFixture<ProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPage ],
      imports: [
        IonicModule.forRoot(),
        IonImageModule,
        RouterModule.forRoot([{
          path: 'not-found',
          loadChildren: () => import('src/app/page/not-found/not-found.module').then( m => m.NotFoundPageModule)
        }]),
        TranslateModule.forRoot(),
        HttpClientModule,
        IonicStorageModule.forRoot(),
        LocalValueDirectiveModule,
        TouchspinModule,
        PricePipeModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
