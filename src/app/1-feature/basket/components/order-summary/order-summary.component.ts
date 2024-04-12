import {CurrencyPipe} from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStore} from "@world-peas/infrastructure";
import {FreeShippingPipe} from "../../pipes/free-shipping.pipe";

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [
    CurrencyPipe,
    FreeShippingPipe
  ],
  template: `
      <div class="order-summary">
          <span class="title">Order summary</span>
          <div class="step-order-summary">
              <span>Subtotal</span>
              <span>{{ orderSummary().subtotal | currency }}</span>
          </div>
          <div class="step-order-summary">
              <span>Shipping</span>
              <span>{{ orderSummary().shipping | currency | freeShipping }}</span>
          </div>
          <div class="step-order-summary">
              <span>Tax</span>
              <span>{{ orderSummary().tax | currency }}</span>
          </div>
          <div class="total">
              <span>Total</span>
              <span>{{ orderSummary().total | currency }}</span>
          </div>
      </div>
  `,
  styles: `
      .order-summary {
          display: flex;
          flex-direction: column;

          width: 100%;
          margin: 0.4rem 0 1.2rem 0;
          padding: 1.5rem;

          background-color: #FAFAF5;

          border: 2px solid #E6E6E6;
          border-radius: 10px;

          .title {
              font-weight: 600;

              margin-bottom: 1.5rem;
          }

          .step-order-summary, .total {
              display: flex;
              justify-content: space-between;

              margin-bottom: 0.8rem;
          }

          .total {
              font-weight: 600;
          }
      }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSummaryComponent {
  readonly orderSummary = inject(ProductsStore).orderSummary;
}
