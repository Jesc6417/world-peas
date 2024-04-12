import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {DisplayPricePipe} from "@world-peas/common";
import {Product} from '@world-peas/domain';
import {ManageBasketComponent} from "../manage-basket/manage-basket.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ManageBasketComponent,
    DisplayPricePipe,
    CurrencyPipe
  ],
  template: `
      <div class="product-container">
          <div class="product">
              <img priority [ngSrc]="product().imagePath" width="395" height="296" [alt]="product().name">
              <div class="description">
                  <span class="title">{{ product().name }}</span>
                  <span class="price">{{ product().price | currency | displayPrice: product().typePrice }} </span>
                  <span class="origin">{{ product().origin }}</span>
              </div>
              <div class="actions">
                  <app-manage-basket [productId]="product().id"/>
              </div>
          </div>
      </div>
  `,
  styles: `
      @import 'variables';

      .product-container {
          display: flex;
          justify-content: center;

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
                      color: $ primary-color;
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
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  product = input.required<Product>();
}
