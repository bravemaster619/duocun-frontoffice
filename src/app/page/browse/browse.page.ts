import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { FeaturedProductInterface } from 'src/app/model/Product';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
  providers: [ApiService]
})
export class BrowsePage implements OnInit {

  loading:boolean = false;
  featuredProducts: Array<FeaturedProductInterface> = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.apiService.v2().get("products/featured").then(observer => {
      observer.subscribe(data => {
        //@ts-ignore
        this.featuredProducts = data;
        this.loading = false;
      });
    });
  }

}
