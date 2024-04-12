import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'displayPrice',
  standalone: true
})
export class DisplayPricePipe implements PipeTransform {
  
  transform(price: string | null, typePrice?: string): unknown {
    return `${price} / ${typePrice}`;
  }
  
}
