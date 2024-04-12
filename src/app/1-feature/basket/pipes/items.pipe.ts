import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'items',
  standalone: true
})
export class ItemsPipe implements PipeTransform {
  
  transform(numberItems: number): string {
    return `${numberItems} item${numberItems === 1 ? '' : 's'}`;
  }
  
}
