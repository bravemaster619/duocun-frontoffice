import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import * as Config from "src/assets/config.json";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  lang: string;
  

  constructor(
    private menu: MenuController,
    private translator: TranslateService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.lang = this.translator.currentLang;
  }

  open() {
    this.menu.open('side-menu');
  }

  changeLang(e) {
    this.lang = e.detail.value;
    this.storage.set(Config.LANG_KEY, this.lang);
    this.translator.use(e.detail.value);
  }

}