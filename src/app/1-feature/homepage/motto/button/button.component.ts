import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <input type="button" value="Browse our shop" />
  `,
  styles: `
  input {
    padding: 19px 32px;
    
    font-size: 20px;
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
export class ButtonComponent {
}
