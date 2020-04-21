import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  pure: false
})
export class PricePipe implements PipeTransform {

  formatter: any

  constructor() {
    this.formatter = new Intl.NumberFormat('en-US');
  }

  transform(value: any, currency: string = '$'): string {
    if (typeof value === "object") {
      return this.transform(value.price, currency);
    }
    value = parseFloat(<string> value);
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    return this.formatter.format(value) + ` ${currency}`;
  }
}