import {CurrencyPipe, NgOptimizedImage} from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStore} from "@world-peas/infrastructure";
import {DisplayPricePipe} from "../../../../2-common/pipes/display-price.pipe";
import {ManageBasketComponent} from "../manage-basket/manage-basket.component";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ProductComponent,
    ManageBasketComponent,
    DisplayPricePipe,
    CurrencyPipe
  ],
  template: `
      <div class="products">
          @for (product of products(); track product.id) {
              <div class="products__product">
                  <img [ngSrc]="product.imagePath" height="50" width="66" [alt]="product.name"/>
                  <span class="name">{{ product.name }}</span>
                  <span>{{ product.origin }}</span>
                  <span class="price">{{ product.price | currency | displayPrice: product.typePrice }}</span>
                  <div class="actions">
                      <app-manage-basket [productId]="product.id"/>
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

          width: 100%;

          & __product {
              display: grid;
              grid-template-columns: 66px 1fr 1fr 1fr 1fr;
              align-items: center;
              margin: 0.4rem 0;


              width: 100%;
              height: 50px;

              background-color: #FAFAF5;

              border: 2px solid #E6E6E6;
              border-radius: 10px;

              img {
                  border-radius: 8px 0 0 8px;
              }

              .name {
                  margin-left: 0.4rem;
              }

              .price {
                  color: $ primary-color;
                  font-size: 20px;
                  font-weight: 600;
              }

              .actions {
                  display: flex;
                  align-items: center;
                  justify-content: center;
              }
          }
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewComponent {
  readonly products = inject(ProductsStore).sortedProducts;
}
