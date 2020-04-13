import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginMode: 'username' | 'phone'

  constructor(
    private title: Title,
    private translator: TranslateService
  ) { 
    this.loginMode = 'username';
  }

  ngOnInit() {
    this.translator.get("title.signin").subscribe((title: string) => {
      this.title.setTitle(title);
    })
  }

  toggleLoginMode() {
    this.loginMode = (this.loginMode === 'phone') ? 'username' : 'phone';
  }

}
