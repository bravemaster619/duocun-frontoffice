import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isPhoneVerified: boolean

  constructor(
    private title: Title,
    private translator: TranslateService
  ) {
    this.isPhoneVerified = false;
  }

  ngOnInit() {
    this.translator.get("title.signup").subscribe((title: string) => {
      this.title.setTitle(title);
    })
  }

}
