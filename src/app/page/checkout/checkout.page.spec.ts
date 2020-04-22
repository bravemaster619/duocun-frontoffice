import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PricePipeModule } from 'src/app/pipe/price/price.module';
import { TranslateModule } from '@ngx-translate/core';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { CheckoutPage } from './checkout.page';

describe('CheckoutPage', () => {
  let component: CheckoutPage;
  let fixture: ComponentFixture<CheckoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        IonicStorageModule.forRoot(),
        TranslateModule.forRoot(),
        PricePipeModule,
        RouterModule.forRoot([]),
        AgmCoreModule.forRoot(),
        IonImageModule,
        LocalValueDirectiveModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
