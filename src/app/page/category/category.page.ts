import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ProductInterface } from 'src/app/model/Product';
import { CategoryInterface } from 'src/app/model/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  loading: boolean;
  category: CategoryInterface;
  products: Array<ProductInterface>;
  subCategories: Array<CategoryInterface>;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { 
    this.loading = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.apiService.v2().get(`categories/${id}`).then(observer => {
        observer.subscribe((data: any) => {
          if (data.success) {
            this.category = data.data.category;
            this.products = data.data.products;
            this.subCategories = data.data.subCategories;
            this.loading = false;
          }
        })
      })
    })
  }

}
