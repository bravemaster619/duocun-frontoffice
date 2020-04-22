import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { TouchspinModule } from 'src/app/component/touchspin/touchspin.module';
import { PricePipeModule } from 'src/app/pipe/price/price.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPage ],
      imports: [
        IonicModule.forRoot(),
        LocalValueDirectiveModule,
        IonImageModule,
        HttpClientModule,
        IonicStorageModule.forRoot(),
        TranslateModule.forRoot(),
        PricePipeModule,
        TouchspinModule,
        RouterModule.forRoot([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
