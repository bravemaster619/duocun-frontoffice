import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ProductInterface } from 'src/app/model/Product';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  loading: boolean = true;
  product: ProductInterface;
  href: string;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private translator: TranslateService,
    private title: Title
  ) { }

  ngOnInit() {
    this.href = window.location.href;
    this.translator.get("title.product").subscribe((title: string) => {
      this.title.setTitle(title);
    })
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.apiService.v2().get(`products/${id}`).then(observer => {
        observer.subscribe(data => {
          if (data['success']) {
            this.product = data['data'];
            this.title.setTitle(this.product.name);
          } else {
            // this.router.navigate(["/404"]);
          }
          this.loading = false;
        })
      })
    })
  }

  handleQuantityChange(event:{
    value: number,
    action: 'up'|'down'|'set'
  }) {
    
  }

}
