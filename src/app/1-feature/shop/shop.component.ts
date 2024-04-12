import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStore} from "../../4-infrastructure/+state/products.store";
import {CardsViewComponent} from "./components/cards-view/cards-view.component";
import {DisplayButtonComponent} from "./components/display-button/display-button.component";
import {ShopHeaderComponent} from "./components/header/shop-header.component";
import {ListViewComponent} from "./components/list-view/list-view.component";
import {ProductComponent} from "./components/product/product.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    DisplayButtonComponent,
    ShopHeaderComponent,
    ProductComponent,
    CardsViewComponent,
    ListViewComponent
  ],
  template: `
    <div class="shop-container">
      <app-shop-header />
      @if (productsStore.productsView() === 'cards') {
        <app-cards-view />
      } @else {
        <app-list-view />
      }
    </div>
  `,
  styles: `
  :host {
    width: 100%;
  }
  
  .shop-container {
    width: 100%;
    
    margin: 56px 0;
    
    app-shop-header {
      width: 100%;
      display: grid;
      grid-template-columns: 3fr;
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent {
  readonly productsStore = inject(ProductsStore);
}

export default ShopComponent;
