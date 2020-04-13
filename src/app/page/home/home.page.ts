import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private title: Title,
    private meta: Meta,
    private translator: TranslateService
  ) {}

  ngOnInit() {
    this.translator.get("title.home").subscribe((title: string) => {
      this.title.setTitle(title);
    });
    this.translator.get("description.home").subscribe((desc: string) => {
      this.meta.updateTag({
        name: 'description',
        content: desc
      });
    })
  }

}
