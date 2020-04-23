import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
@Component({
  selector: 'app-form-phone',
  templateUrl: './form-phone.component.html',
  styleUrls: ['./form-phone.component.scss'],
})
export class FormPhoneComponent implements OnInit {

  isOtpSent: boolean
  failedCount: number;
  processing: boolean;
  phone: string;
  otp: string;
  returnUrl: string;
  constructor(
    private api: ApiService,
    private alert: AlertController,
    private translator: TranslateService,
    private auth: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.isOtpSent = false;
    this.failedCount = 0;
    this.processing = false;
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  handleLogin() {
    this.api.v1().post("Accounts/loginByPhone", {phone: this.phone, verificationCode: this.otp}).then(observable => {
      observable.subscribe((token: string) => {
        if (token) {
          this.auth.login(token).then(() => {
            this.router.navigateByUrl(this.returnUrl);
          });
        } else {
          this.showAlert("Notice", "Login failed", "OK");
          this.failedCount++;
        }
      })
    }).catch(e => {
      this.showAlert("Notice", "Login failed", "OK");
      this.failedCount++;
    })
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

  showAlert(header, message, button) {
    this.translator.get([header, message, button]).subscribe(dict => {
      this.alert.create({
        header: dict[header],
        message: dict[message],
        buttons: [dict[button]]
      }).then(alert => alert.present());
    });
  }

  isValid(phone:string):boolean {
    return phone && phone.length > 7 && phone.length < 15
  }

}
