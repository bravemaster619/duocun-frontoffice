import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
@Component({
  selector: 'app-form-username',
  templateUrl: './form-username.component.html',
  styleUrls: ['./form-username.component.scss'],
})
export class FormUsernameComponent implements OnInit {

  username: string;
  password: string;
  processing: boolean;
  error: string;
  returnUrl: string;
  constructor(
    private apiService: ApiService,
    private auth: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.username = '';
    this.password = '';
    this.processing = false;
    this.error = '';
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  handleSignIn() {
    if (!this.validateInput()) {
      return;
    }
    this.error = '';
    this.processing = true;
    this.apiService.v1().post('Accounts/login', {
      username: this.username,
      password: this.password
    }).then(observable => {
      observable.subscribe(token => {
        if (token) {
          this.auth.login(<string> token).then(() => {
            this.router.navigateByUrl(this.returnUrl);
          });
        } else {
          this.error = "Login failed";
          
        }
      });
    }).finally(() => {
      this.processing = false;
    });
  }

  validateInput(): boolean {
    if (!this.username) {
      this.error = 'Please input username';
      return false;
    }
    if (!this.password) {
      this.error = 'Please input password';
      return false;
    }
    return true;
  }

}
