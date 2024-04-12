import {ChangeDetectionStrategy, Component, output} from '@angular/core';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  template: `
      <input class="add" type="button" value="+" (click)="onClick.emit()"/>
  `,
  styles: `
  @import 'variables';
  
  .add {
    border-radius: 25px;
    background-color: $primary-color;
    color: white;

    width: 100px;
    height: 40px;
    
    border: none;
    
    text-align: center;
    
    font-size: 25px;
    
    width: 40px;
    height: 40px;
    
    cursor: pointer;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddButtonComponent {
  onClick = output();
}
