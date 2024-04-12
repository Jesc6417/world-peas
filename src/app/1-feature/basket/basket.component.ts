import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BasketHeaderComponent} from "./components/header/basket-header.component";
import {OrderSummaryComponent} from "./components/order-summary/order-summary.component";
import {ProductComponent} from "./components/product/product.component";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    BasketHeaderComponent,
    ProductComponent,
    OrderSummaryComponent
  ],
  template: `
    <div class="basket-container">
      <app-basket-header />
      <div class="content">
        <app-basket-product />
        <app-order-summary />
      </div>
    </div>
  `,
  styles: `
      :host {
          width: 100%;
      }

      .basket-container {
          width: 100%;

          margin: 5rem 0 1.2rem 0;

          app-basket-header {
              width: 100%;
              display: grid;
              grid-template-columns: 3fr;
          }

          .content {
              display: flex;
              justify-content: start;
              width: 100%;

              app-order-summary {
                  width: 23%;
              }

              app-basket-product {
                  width: 70%;
                  margin-right: 3rem;
              }
          }

      }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent {

}

export default BasketComponent;
