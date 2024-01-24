import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import bootstrap from "../../../../main.server";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-button',
  standalone: true,
  imports: [CommonModule],
  template: `
      <input type="button" [value]="title()" [ngClass]="{selected: selected()}" />
  `,
  styles: `
    @import 'variables';
    
    input {
      font-size: 16px;
      font-weight: 600;
      
      color: #000;
      
      cursor: pointer;
      
      background-color: #fff;
      
      border-radius: 20px;
      border: 1px solid #C2C2C2;
      padding: 9px 16px;
      margin-right: 8px;
      
      &:hover {
        background-color: rgba(66, 107, 31, 0.8);
        border-radius: 20px;
              
        color: #fff;
      }
    }
    
    .selected {
      color: #ffffff;
    
      background-color: $primary-color;
      border: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayButtonComponent {
  title = input<string>('');
  selected = input<boolean>(false);
}
