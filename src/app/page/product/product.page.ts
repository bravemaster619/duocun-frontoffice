import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { ProductInterface, ProductAttributeInterface, ProductCombinationInterface, containEqualCombinationValues, ProductCombinationValueInterface, areEqualCombinationValues } from 'src/app/model/product.model';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { OrderableItemInterface } from 'src/app/model/orderable-item.model';
import { CartService } from 'src/app/service/cart/cart.service';
import { AlertController } from '@ionic/angular';
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
    private title: Title,
    private cartService: CartService,
    private alert: AlertController,
    private router: Router
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
            this.router.navigate(["/not-found"]);
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
    this.item = this.getItemFromCombinationIndex(this.product, this.item, combinationIdx);
  }

  async addToCart() {
    this.cartService.addItem(this.item);
    const header = 'Notice';
    const message = 'Product has been added to cart';
    const button = 'OK';
    this.translator.get([header, message, button]).subscribe((dict) => {
      this.alert.create({
        header: dict[header],
        message: dict[message],
        buttons: [dict[button]]
      }).then(alert => alert.present());
    });
  }

  buyNow() {
    this.cartService.setBuyNowItem(this.item);
  }

  isInStock() {
    if (!this.product.stock || !this.product.stock.enabled) {
      return true;
    }
    if (this.item.combinationIdx !== undefined) {
      return this.product.combinations[this.item.combinationIdx].quantity > 0;
    } else {
      return this.product.stock.quantity > 0;
    }
  }

  getDefaultItemFromProduct(product:ProductInterface): OrderableItemInterface {
    let item:any = {
      product,
      productId: product._id,
      quantity: 1
    };
    if (!product.combinations || !product.combinations.length) {
      item.price = product.price;
      return item;
    }
    if (!product.stock || !product.stock.enabled) {
      return this.getItemFromCombinationIndex(product, item, 0);
    } 
    // if product stock is enabled, find the available item
    let availableItemIndex = -1;
    for (let i = 0; i < product.combinations.length; i++) {
      if (product.combinations[i].quantity > 0) {
        availableItemIndex = i;
      }
    }
    if (availableItemIndex !== -1) {
      return this.getItemFromCombinationIndex(product, item, availableItemIndex);
    } else {
      return this.getItemFromCombinationIndex(product, item, 0);
    }
  }

  getItemFromCombinationIndex(product:ProductInterface, item:OrderableItemInterface, combinationIdx: number) {
    item.combinationIdx = combinationIdx;
    item.price = product.combinations[combinationIdx].price;
    item.attributeDescriptions = this.getAttributeDescriptions(product, item);
    item = this.getCombinationDescriptions(product, item);
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

  getCombinationDescriptions(product: ProductInterface, item: OrderableItemInterface): OrderableItemInterface {
    const descriptionArray = [];
    const descriptionENArray = [];
    const combinations = product.combinations[item.combinationIdx];
    combinations.values.forEach(({ attrIdx, valIdx }) => {
      const attribute = product.attributes.find(({ _id }) => _id === attrIdx);
      if (attribute) {
        descriptionArray.push(`${attribute.name}: ${attribute.values[valIdx].name}`);
        if (attribute.nameEN) {
          descriptionENArray.push(`${attribute.nameEN}: ${attribute.values[valIdx].nameEN}`);
        } else {
          descriptionENArray.push(`${attribute.name}: ${attribute.values[valIdx].name}`);
        }
      }
    });
    item.combinationDescription = descriptionArray.join(", ");
    item.combinationDescriptionEN = descriptionENArray.join(", ");
    return item;
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
