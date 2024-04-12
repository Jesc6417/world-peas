import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStore} from "@world-peas/infrastructure";
import {ItemsPipe} from "../../pipes/items.pipe";

@Component({
  selector: 'app-basket-header',
  standalone: true,
  imports: [
    ItemsPipe
  ],
  template: `
      <div class="header">
          <div class="produce">
              <span class="title">Basket</span>
              @if (numberItemsBought()) {
                <span class="sub-title">{{ numberItemsBought() | items }}</span>
              }
          </div>
      </div>
  `,
  styles: `
      :host {
          grid-column: span 3;
      }

      .header {
          display: flex;
          justify-content: space-between;
          align-items: center;

          border-bottom: 1px solid #E6E6E6;

          padding-bottom: 13px;
          margin-bottom: 20px;

          .produce {
              .title {
                  font-family: 'Newsreader', serif;
                  font-size: 64px;

                  margin-right: 24px;
              }

              .sub-title {
                  font-family: 'Inter', sans-serif;
                  font-size: 20px;
                  font-weight: 300;

                  margin-bottom: 8px;

              }
          }
      }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketHeaderComponent {
  readonly numberItemsBought = inject(ProductsStore).numberItemsBought;
}
