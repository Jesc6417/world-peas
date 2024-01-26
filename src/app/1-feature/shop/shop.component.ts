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
          <img src="./assets/img/shop/heirloom-tomato.png" width="395px" height="296px" alt="Heirloom Tomato">
          <div class="description">
            <span class="title">Heirloom Tomato</span>
            <span class="price">$5.99 /lb</span>
            <span class="origin">Grown in San Juan Capistrano, CA</span>  
          </div>
          <div class="actions">
            <input class="add" type="button" value="+" />
          </div>
        </div>
        <div class="product">
          <img src="./assets/img/shop/organic-ginger.png" width="395px" height="296px" alt="Organic ginger">
            <div class="description">
                <span class="title">Organic ginger</span>
                <span class="price">$12.99 /lb</span>
                <span class="origin">Grown in Huntington Beach, CA</span>
            </div>
            <div class="actions">
                <div class="buttons">
                  <a class="action">-</a>
                  <span>1</span>
                  <a class="action">+</a>
                </div>
            </div>
        </div>
        <div class="product">
        <img src="./assets/img/shop/onion.png" width="395px" height="296px" alt="Onion">
          <div class="description">
              <span class="title">Onion</span>
              <span class="price">$2.99 /lb</span>
              <span class="origin">Grown in San Francisco, CA</span>
          </div>
          <div class="actions">
              <div class="buttons">
                  <a class="action">-</a>
                  <span>2</span>
                  <span class="max">Qté max</span>
              </div>
          </div>
      </div>
    </div>
  `,
  styles: `
  @import 'variables';
  
  :host {
    width: 100%;
  }
  
  .shop-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    
    width: 100%;
    
    margin: 56px 0;
    
    .product {
      border: 2px solid #E6E6E6;
      border-radius: 25px;
      
      position: relative;
      
      background-color: #FAFAF5;
      width: 395px;
      height: 444px;
      
      img {
        border-radius: 24px 24px 0 0;
      }
      
      .actions {
        position: absolute;
        right: 24px;
        top: 24px;
        
        .buttons, .add {
          border-radius: 25px;
          background-color: $primary-color;
          color: white;

          width: 100px;
          height: 40px;
        }
        
        .buttons {
          display: flex;
          justify-content: space-around;
          align-items: center;
          
          a {
            cursor: pointer;
            
            font-size: 25px;
          }
          
          .max {
            width: 20px;
            
            font-size: 11px;
          }
        }
        
        .add {
          border: none;
          
          text-align: center;
          
          font-size: 25px;
          
          width: 40px;
          height: 40px;
          
          cursor: pointer;
        }  
      }
      
      .description {
        display: flex;
        flex-direction: column;
        
        padding: 24px 0 0 24px;
        
        .title {
          margin-bottom: 4px;
        }
        
        .price {
          margin-bottom: 16px;
          color: $primary-color;
        }
        
        .title, .price {
          font-size: 20px;
          font-weight: 600;
        }
        
        .origin {
          color: #6D6D6D;
          
          font-size: 16px;
        }
      }
    }
    
    .header {
      grid-column: span 3;
      
      display: flex;
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
