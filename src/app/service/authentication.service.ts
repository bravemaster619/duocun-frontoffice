import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import * as Config from "src/assets/config.json";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private platform: Platform
  ) { 
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(Config.AUTH_TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }

  login(token: string) {
    return this.storage.set(Config.AUTH_TOKEN_KEY, token).then(() => {
      this.authenticationState.next(true);
    })
  }

  logout() {
    return this.storage.remove(Config.AUTH_TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    })
  }

  isAuthenticated() {
    return this.authenticationState.value
  }

  async getToken() {
    return new Promise(resolve => {
      this.storage.get(Config.AUTH_TOKEN_KEY).then((token) => {
        resolve(token);
      }).catch(() => {
        resolve("");
      })
    });
  }

}
