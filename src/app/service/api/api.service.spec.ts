import { TestBed } from '@angular/core/testing';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AuthenticationService } from '../authentication/authentication.service';
import * as Config from 'src/assets/config.json';

const config = process.env.NODE_ENV === "production"
  ? Config.production
  : Config.development;

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      IonicStorageModule.forRoot(),
      HttpClientModule
    ]
  }));
  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
  describe('buildUrl', () => {
    it('should prepend api url to given url', () => {
      const service: ApiService = TestBed.get(ApiService);
      const url = "test";
      expect(service.v1().buildUrl(url)).toEqual(config.API_URL + "/test");
    });
    it('should remove a slash if given url already contains one', () => {
      const service: ApiService = TestBed.get(ApiService);
      const url = "/test";
      expect(service.v1().buildUrl(url)).toEqual(config.API_URL + "/test");
    });
    it('should build a query string for given parameter', () => {
      const service: ApiService = TestBed.get(ApiService);
      const url = "/test";
      const param = {
        foo: 'bar',
        bar: 'baz'
      };
      expect(service.v1().buildUrl(url, param)).toEqual(config.API_URL + '/test?bar=baz&foo=bar');
    });
  });
  describe('buildAuthHeader', () => {

    it('should return empty object when user is not authenticated', (done) => {
      const authService: AuthenticationService = TestBed.get(AuthenticationService);
      const apiService: ApiService = TestBed.get(ApiService);
      authService.logout().then(() => {
        apiService.v1().buildAuthHeader().then(header => {
          expect(header).toEqual({});
          done();
        })
      });
    });
    it('should return http header object when user is authenticated', (done) => {
      const authService: AuthenticationService = TestBed.get(AuthenticationService);
      const apiService: ApiService = TestBed.get(ApiService);
      authService.login('my token').then(() => {
        apiService.v1().buildAuthHeader().then(header => {
          const headers = header.headers;
          expect(headers.get('Authorization')).toEqual('Bearer my token');
          done();
        });
      });
    });
  });
  describe('v2', () => {
    it('should set api v2 url', () => {
      const service: ApiService = TestBed.get(ApiService);
      const url = 'test';
      expect(service.v2().buildUrl(url)).toEqual(config.API_V2_URL + '/test');
    });
  });
})