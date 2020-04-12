import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginMode: 'username' | 'phone'

  constructor() { 
    this.loginMode = 'username';
  }

  ngOnInit() {
    
  }

  toggleLoginMode() {
    this.loginMode = (this.loginMode === 'phone') ? 'username' : 'phone';
  }

}
