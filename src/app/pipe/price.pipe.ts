import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  transform(value: any, currency: string = '$'): string {
    if (typeof value === "object") {
      return this.transform(value.price, currency);
    }
    value = parseFloat(<string> value);
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    return `${value.toFixed(2)} ${currency}`;
  }
}