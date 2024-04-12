import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DisplayPricePipe} from "@world-peas/common";
import {ProductsStore} from "@world-peas/infrastructure";
import {ManageBasketComponent} from "../../../shop/components/manage-basket/manage-basket.component";

@Component({
  selector: 'app-basket-product',
  standalone: true,
  imports: [
    ManageBasketComponent,
    NgOptimizedImage,
    DisplayPricePipe,
    CurrencyPipe
  ],
  template: `
      <div class="products">
          @for (product of store.basket(); track product.id) {
              <div class="products__product">
                  <img [ngSrc]="product.imagePath" height="160" width="198" [alt]="product.name"/>
                  <div class="details">
                      <span class="name">{{ product.name }}</span>
                      <span class="price">{{ product.price | currency | displayPrice: product.typePrice }}</span>
                      <div class="actions">
                          <app-manage-basket [productId]="product.id"/>
                      </div>
                  </div>
                  <div class="price amount">
                      <span>{{ product.price * product.numberItems | currency }}</span>
                  </div>
              </div>
          } @empty {
              <p>There are no products.</p>
          }

      </div>
  `,
  styles: `
      @import 'variables';

      .products {
          display: flex;
          flex-direction: column;

          margin-top: 0.4rem;

          & __product {
              display: grid;
              grid-template-columns: 198px 1fr 1fr;
              align-items: flex-start;

              margin-bottom: 0.4rem;

              width: 100%;
              height: 10rem;

              background-color: #FAFAF5;

              border: 2px solid #E6E6E6;
              border-radius: 10px;

              .details {
                  display: flex;
                  flex-direction: column;

                  padding: 0.4rem;
              }

              img {
                  border-radius: 10px 0 0 10px;
              }

              .name {
                  font-size: 20px;
                  font-weight: 600;
              }

              .price {
                  color: $ primary-color;
                  font-size: 20px;
                  font-weight: 600;

                  margin: 0.2rem 0;
              }

              .amount {
                  color: #000;

                  display: flex;
                  align-items: start;
                  justify-content: end;

                  padding: 1rem;
              }

              .actions {
                  margin-top: 0.5rem;
              }
          }
      }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  readonly store = inject(ProductsStore);
}
