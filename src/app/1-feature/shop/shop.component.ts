import { ChangeDetectionStrategy, Component } from '@angular/core';
import {DisplayButtonComponent} from "./display-button/display-button.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    DisplayButtonComponent
  ],
  template: `
    <div class="shop-container">
      <div class="header">  
        <div class="produce">
            <span class="title">Produce</span>
            <span class="sub-title">Fresh</span>
            <span class="date"> - August 2123</span>
        </div>
        <div class="display">
            <app-display-button [selected]="true" title="Default" />
            <app-display-button title="A-Z" />
            <app-display-button title="List view" />
        </div>
      </div>    
      <div class="product">
          <img src="./assets/img/shop/heirloom-tomato.png" width="395px" height="296px" alt="Tomato">
      </div>
      <div class="product">
          <img src="./assets/img/shop/organic-ginger.png" width="395px" height="296px" alt="Tomato">
      </div>
      <div class="product">
          <img src="./assets/img/shop/onion.png" width="395px" height="296px" alt="Tomato">
      </div>
    </div>
  `,
  styles: `
  :host {
    width: 100%;
  }
  
  .shop-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    grid-template-rows: 1fr 1fr;
    
    width: 100%;
    
    margin: 56px 0;
    
    .product {
      border: 2px solid #E6E6E6;
      border-radius: 25px;
      
      background-color: #FAFAF5;
      width: 395px;
      height: 444px;
      
      img {
        border-radius: 24px 24px 0 0;
      }
      
      
    }
    
    .header {
      grid-column: span 3;
      
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      
      border-bottom: 1px solid #E6E6E6;
      
      padding-bottom: 13px;
      margin-bottom: 20px;
      
      .produce {
        .title {
          font-family: 'Newsreader', serif;
          font-size: 64px;
          
          margin-right: 24px;
        }
        
        .sub-title, .date {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 300;
          
          margin-bottom: 8px;
          
        }
        
        .sub-title {
          margin-right: 8px;
          font-weight: 500;
        }
      }
      .display {
        margin-bottom: 15px;
      }
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent {

}

export default ShopComponent;
