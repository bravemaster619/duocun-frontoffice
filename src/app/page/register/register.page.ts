import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isPhoneVerified: boolean

  phone: string;
  verificationCode: string;
  username: string;
  password: string;
  passwordConfirmation: string;

  constructor(
    private title: Title,
    private translator: TranslateService,
    private api: ApiService,
    private alert: AlertController,
    private auth: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.isPhoneVerified = false;
    this.phone = "";
    this.verificationCode = "";
    this.username = "";
    this.password = "";
    this.passwordConfirmation = "";
  }

  ngOnInit() {
    this.translator.get("title.signup").subscribe((title: string) => {
      this.title.setTitle(title);
    });
  }

  isInputValid(): boolean {
    if (!this.phone || this.phone.length < 7 || this.phone.length > 15) {
      return false;
    }
    if (!this.verificationCode) {
      return false;
    }
    if (this.username) {
      if (this.username.length < 5 || this.username.length > 255) {
        return false;
      }
    }
    if (this.password) {
      if (this.password.length < 6 || this.password.length > 255) {
        return false;
      }
      if (this.password !== this.passwordConfirmation) {
        return false;
      }
    }
    return true;
  }

  handleSendOTP() {
    this.api.v2().post("users/send-otp", { phone: this.phone }).then(observable => {
      observable.subscribe((data: any) => {
        if (data.success) {
          this.showAlert("Notice", "Verification code sent", "OK");
        } else {
          this.showAlert("Notice", "Verification code not sent", "OK");
        }
      })
    });
  }

  
  handleSignUp() {
    this.api.v2().post("users/signup", {
      phone: this.phone,
      verificationCode: this.verificationCode,
      username: this.username,
      password: this.password
    }).then(observable => {
      observable.subscribe((res:any) => {
        console.log(res);
        if (res.success) {
          const header = "Notice";
          const message = "Registered successfully";
          const button = "OK";
          this.translator.get([header, message, button]).subscribe(dict => {
            this.alert.create({
              header: dict[header],
              message: dict[message],
              buttons: [{
                text: dict[button],
                handler: () => {
                  this.router.navigate(["/login"]);
                }
              }]
            }).then(alert => alert.present())
          })
        } else {
          if (res.message && res.message === "verification_failed") {
            this.showAlert("Notice", "Verification failed", "OK");
          } else if (res.message && res.message === "username_duplicated") {
            this.showAlert("Notice", "Username is already in use", "OK");
          } else {
            this.showAlert("Notice", "Registration failed", "OK");
          }
        }
      });
    }) 
  }

  showAlert(header, message, button) {
    this.translator.get([header, message, button]).subscribe(dict => {
      this.alert.create({
        header: dict[header],
        message: dict[message],
        buttons: [dict[button]]
      }).then(alert => alert.present());
    });
  }


}
