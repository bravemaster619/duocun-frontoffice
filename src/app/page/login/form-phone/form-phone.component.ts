import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-phone',
  templateUrl: './form-phone.component.html',
  styleUrls: ['./form-phone.component.scss'],
})
export class FormPhoneComponent implements OnInit {

  isOtpSent: boolean

  constructor() { 
    this.isOtpSent = false;
  }

  ngOnInit() {
    
  }

}
