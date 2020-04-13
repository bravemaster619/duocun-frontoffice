import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HomePage } from './home.page';
import { createTranslateLoader } from '../../app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from 'src/app/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomePage,
        SideMenuComponent
      ],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
          }
        }),
        RouterModule.forRoot([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
