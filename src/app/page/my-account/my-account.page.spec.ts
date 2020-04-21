import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';
import { MyAccountPage } from './my-account.page';

describe('MyAccountPage', () => {
  let component: MyAccountPage;
  let fixture: ComponentFixture<MyAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountPage ],
      imports: [
        IonicModule.forRoot(),
        AgmCoreModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', async(() => {
  //   expect(component).toBeTruthy();
  // }));
});
