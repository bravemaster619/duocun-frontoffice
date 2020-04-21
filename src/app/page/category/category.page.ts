import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { ProductInterface } from 'src/app/model/product.model';
import { CategoryInterface } from 'src/app/model/category.model';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

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
    private route: ActivatedRoute,
    private translator: TranslateService,
    private title: Title,
  ) { 
    this.loading = true;
    this.translator.get("title.category").subscribe((title: string) => {
      this.title.setTitle(title);
    })
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
            this.title.setTitle(this.category.name);
          }
        })
      })
    })
  }

}
