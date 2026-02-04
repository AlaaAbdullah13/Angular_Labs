import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'discount', standalone: true })
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number = 0): string {
    const final = price - (price * (discount / 100));
    return final.toFixed(2) + ' EGP';
  }
}