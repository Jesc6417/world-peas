import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'blackOrWhite',
  standalone: true
})
export class BlackOrWhitePipe implements PipeTransform {
  
  transform(selected: boolean): string {
    return selected ? '#ffffff' : '#000000';
  }
  
}
