import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as queryString from "query-string";
import { AuthenticationService } from "src/app/service/authentication.service";
import * as Config from 'src/assets/config.json';

const config = process.env.NODE_ENV === "production"
  ? Config.production
  : Config.development;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private auth: AuthenticationService
  ) {}

  v1() {
    return new HttpService(config.API_URL, this.http, this.auth);
  }
  v2() {
    return new HttpService(config.API_V2_URL, this.http, this.auth);
  }
  
}

class HttpService {

  constructor(
    protected apiHost: string,
    protected http: HttpClient,
    protected auth: AuthenticationService
  ) {}

  buildUrl(url, param = null) {
    url = this.apiHost + (url.startsWith("/") ? url : `/${url}`);
    if (!param) {
      return url;
    }
    if (typeof param === "string") {
      return url + param;
    }
    if (typeof param === "object") {
      return `${url}?${queryString.stringify(param)}`;
    }
    return url;
  }
  async buildAuthHeader() {
    const token = await this.auth.getToken();
    if (token) {
      return {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${token}`)
      };
    } else {
      return {};
    }
  }
  async get(url, param = null, auth = true, isRelative = true) {
    if (isRelative) {
      url = this.buildUrl(url, param);
    }
    if (auth) {
      const authHeader = await this.buildAuthHeader();
      return this.http.get(url, authHeader);
    } else {
      return this.http.get(url);
    }
  }
  async post(url, param = null, auth = true, isRelative = true) {
    if (isRelative) {
      url = this.buildUrl(url);
    }
    if (auth) {
      const authHeader = await this.buildAuthHeader();
      return this.http.post(url, param, authHeader);
    } else {
      return this.http.post(url, param);
    }
  }
  async put(url, param = null, auth = true, isRelative = true) {
    if (isRelative) {
      url = this.buildUrl(url);
    }
    if (auth) {
      const authHeader = await this.buildAuthHeader();
      return this.http.put(url, param, authHeader);
    } else {
      return this.http.put(url, param);
    }
  }
  async delete(url, param = null, auth = true, isRelative = true) {
    if (isRelative) {
      url = this.buildUrl(url, param);
    }
    if (auth) {
      const authHeader = await this.buildAuthHeader();
      return this.http.delete(url, authHeader);
    } else {
      return this.http.delete(url);
    }
  }
}
