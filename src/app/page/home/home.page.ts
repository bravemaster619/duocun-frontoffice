import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { CartInterface } from 'src/app/model/cart.model';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart: CartInterface;
  loggedIn: boolean;

  constructor(
    private title: Title,
    private meta: Meta,
    private translator: TranslateService,
    private cartService: CartService,
    private auth: AuthenticationService
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
    this.auth.getAuthState().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

}
