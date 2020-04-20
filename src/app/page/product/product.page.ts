import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ProductInterface } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  loading: boolean = true;
  product: ProductInterface

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.apiService.v2().get(`products/${id}`).then(observer => {
        observer.subscribe(data => {
          if (data['success']) {
            this.product = data['data'];
          } else {
            // this.router.navigate(["/404"]);
          }
          this.loading = false;
        })
      })
    })
  }

}