import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import * as Config from "src/assets/config.json";
import { ApiService } from 'src/app/service/api/api.service';
import { MenuCategory } from "src/app/model/category.model";
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  providers: [ApiService]
})
export class SideMenuComponent implements OnInit {

  lang: string;
  categories: Array<MenuCategory>;

  constructor(
    private menu: MenuController,
    private translator: TranslateService,
    private storage: Storage,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.lang = this.translator.currentLang;
    this.apiService.v2().get("categories/root-categories").then(observer => {
      observer.subscribe(data => {
        this.categories = <Array<MenuCategory>> data;
      });
    });
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