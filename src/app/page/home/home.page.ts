import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { CartInterface } from 'src/app/model/cart.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart: CartInterface;

  constructor(
    private title: Title,
    private meta: Meta,
    private translator: TranslateService,
    private cartService: CartService
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
    });
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

}
