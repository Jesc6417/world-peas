import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-header-button',
  standalone: true,
  imports: [],
  template: `
    <input type="button" value="Basket (3)" />
  `,
  styles: `
  input {
    padding: 13px 23px;
    
    font-size: 16px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    
    color: #fff;
    
    cursor: pointer;
    
    border-radius: 8px;
    border: none;
    background-color: #426B1F;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonHeaderComponent {
}
