import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowsePage } from './browse.page';
import { IonImageModule } from 'src/app/component/ion-image/ion-image.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { RouterModule } from '@angular/router';
import { LocalValueDirectiveModule } from 'src/app/directive/local-value.module';
import { PricePipeModule } from 'src/app/pipe/price.module';

describe('BrowsePage', () => {
  let component: BrowsePage;
  let fixture: ComponentFixture<BrowsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BrowsePage,
      ],
      imports: [
        IonicModule.forRoot(),
        IonImageModule,
        HttpClientModule,
        IonicStorageModule.forRoot(),
        RouterModule.forRoot([]),
        LocalValueDirectiveModule,
        PricePipeModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
