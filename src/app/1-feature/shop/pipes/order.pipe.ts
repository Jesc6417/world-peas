import {Pipe, PipeTransform} from '@angular/core';
import {orderQuery} from "@world-peas/domain";

@Pipe({
  name: 'order',
  standalone: true
})
export class OrderPipe implements PipeTransform {
  
  transform(ascending: boolean): unknown {
    return ascending ? orderQuery.asc : orderQuery.desc;
  }
  
}
