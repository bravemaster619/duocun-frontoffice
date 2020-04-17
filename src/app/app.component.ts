import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import * as Config from 'src/assets/config.json';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translator: TranslateService,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get(Config.LANG_KEY).then(lang => {
        if (lang === "en" || lang === "zh") {
          this.translator.use(lang);
        } else {
          //@ts-ignore
          this.translator.use(process.env.NODE_ENV === "production" ? Config.production.DEFAULT_LANG : Config.development.DEFAULT_LANG);
        }
      });
    });
  }
}
