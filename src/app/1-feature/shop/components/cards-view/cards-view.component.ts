import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStore} from "@world-peas/infrastructure";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-cards-view',
  standalone: true,
  imports: [
    ProductComponent
  ],
  template: `
      @for (product of products(); track product.id) {
        <app-product [product]="product" />
      } @empty {
        <p>There are no products.</p>
      }
  `,
  styles: `
  :host {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 36px;
    
    margin-top: 16px;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsViewComponent {
  readonly products = inject(ProductsStore).sortedProducts;
}
