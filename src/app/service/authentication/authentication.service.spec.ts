import { TestBed } from '@angular/core/testing';

import { IonicStorageModule } from '@ionic/storage';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      IonicStorageModule.forRoot()
    ]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

  it('should authenticate after login', (done) => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    service.login('my token').then(() => {
      expect(service.isAuthenticated()).toBe(true);
      done();
    })
  })

  it ('should not authenticate after log out', (done) => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    service.login('my token').then(() => {
      service.logout().then(() => {
        expect(service.isAuthenticated()).toBe(false);
        done();
      })
    })
  })

});
