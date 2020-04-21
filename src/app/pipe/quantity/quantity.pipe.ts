import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity',
  pure: false
})
export class QuantityPipe implements PipeTransform {
  transform(value:any): number {
    let quantity = 0;
    if (value.items) {
      return quantity + this.transform(value.items);
    }
    value.forEach(item => {
      quantity += item.quantity;
    });
    return quantity;
  }
}