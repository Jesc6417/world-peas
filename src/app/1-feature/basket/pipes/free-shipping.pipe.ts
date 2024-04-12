import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'freeShipping',
  standalone: true
})
export class FreeShippingPipe implements PipeTransform {
  
  transform(shippingCost: string | null): unknown {
    return shippingCost === '$0.00' ? 'Free shipping' : shippingCost;
  }
  
}
