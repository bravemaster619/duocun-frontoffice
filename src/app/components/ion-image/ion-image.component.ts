import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ion-image',
  templateUrl: './ion-image.component.html',
  styleUrls: ['./ion-image.component.scss'],
})
export class IonImageComponent implements OnInit {

  @Input('src') src: string;
  @Input('alt') alt: string;
  placeholderSrc: string;
  loading: boolean;
  error: boolean;
  constructor() { }

  ngOnInit() {
    this.loading = true;
    this.placeholderSrc = "assets/img/no-image.png";
    this.error = false;
  }

  ionImgDidLoad() {
    this.loading = false;
  }

  ionError() {
    this.error = true;
  }
  
}
