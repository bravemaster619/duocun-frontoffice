import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { ProductInterface, ProductAttributeInterface, ProductCombinationInterface, containEqualCombinationValues, ProductCombinationValueInterface, areEqualCombinationValues } from 'src/app/model/Product';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { OrderableItemInterface } from 'src/app/model/OrderableItem';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  loading: boolean = true;
  product: ProductInterface;
  item: OrderableItemInterface;
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
            this.item = this.getDefaultItemFromProduct(this.product);
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
    this.item.quantity = event.value;
  }

  handleCombinationSelect(attribute:ProductAttributeInterface, valIdx: number|string) {
    const newCombination = this.getNewCombination(attribute, parseInt(<string> valIdx));
    let combinationIdx = this.product.combinations.findIndex(c => containEqualCombinationValues(c, newCombination));
    if (combinationIdx === -1) {
      combinationIdx = this.product.combinations.findIndex(c => {
        return c.values.findIndex(v => areEqualCombinationValues(v, {
          attrIdx: attribute._id,
          valIdx
        })) !== -1;
      });
    }
    if (combinationIdx === -1) {
      throw new Error("Combination not available");
    }
    this.item.combinationIdx = combinationIdx;
    this.item.price = this.product.combinations[this.item.combinationIdx].price;
    this.item.attributeDescriptions = this.getAttributeDescriptions(this.product, this.item);
  }

  getDefaultItemFromProduct(product:ProductInterface): OrderableItemInterface {
    let item:any = {
      productId: product._id,
      quantity: 1
    };
    if (!product.combinations || !product.combinations.length) {
      item.price = product.price;
      return item;
    }
    item.combinationIdx = 0;
    item.price = product.combinations[item.combinationIdx].price;
    item.attributeDescriptions = this.getAttributeDescriptions(product, item);
    return item;
  }
  getAttributeDescriptions(product: ProductInterface, item: OrderableItemInterface): Array<string> {
    const descriptions = [];
    const combinations = product.combinations[item.combinationIdx];
    combinations.values.forEach(({ attrIdx, valIdx }) => {
      const attribute = product.attributes.find(({ _id }) => _id === attrIdx);
      if (attribute) {
        descriptions.push(`${attribute.name}: ${attribute.values[valIdx].name}`);
      }
    });
    return descriptions;
  }
  isAttributeEnabled(attribute: ProductAttributeInterface): boolean {
    return this.getAttributeSelectValue(attribute) !== -1;
  }
  getAttributeSelectValue(attribute: ProductAttributeInterface): number {
    const value = this.product.combinations[this.item.combinationIdx].values.find(({attrIdx}) => attrIdx === attribute._id);
    if (value) {
      return parseInt(<string> value.valIdx);
    } else {
      return -1;
    }
  }
  isAttributeValueAvailable(attribute: ProductAttributeInterface, valIdx: number): boolean {
    const newCombination = this.getNewCombination(attribute, valIdx);
    return this.isCombinationAvailable(newCombination);
  }
  isCombinationAvailable(combination: ProductCombinationInterface): boolean {
    return !!this.product.combinations.find(c => containEqualCombinationValues(combination, c));
  }
  getNewCombination(attribute: ProductAttributeInterface, valIdx: number): ProductCombinationInterface {
    const combination = this.product.combinations[this.item.combinationIdx];
    const combinationAttributeValueIdx = combination.values.findIndex(v => v.attrIdx === attribute._id);
    const newCombination = {...combination};
    newCombination.values = [];
    combination.values.forEach(v => {
      newCombination.values.push({...v});
    });
    newCombination.values[combinationAttributeValueIdx].valIdx = valIdx;
    return newCombination;
  }
}
