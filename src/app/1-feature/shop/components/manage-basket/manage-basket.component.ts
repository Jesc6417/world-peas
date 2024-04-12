import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {AddButtonComponent, AddRemoveButtonComponent} from "@world-peas/common";
import {ProductsStore} from "@world-peas/infrastructure";

@Component({
  selector: 'app-manage-basket',
  standalone: true,
  template: `
      @if (!numberItems()) {
          <app-add-button (onClick)="productsStore.addProduct(this.product()!)"/>
      } @else {
          <app-add-remove-button
                  [max]="this.product()!.maxItems ?? 0"
                  [currentValue]="numberItems()!"
                  (onAddProduct)="productsStore.addProduct(this.product()!)"
                  (onRemoveProduct)="productsStore.removeProduct(this.product()!)"
          />
      }
  `,
  styles: ``,
  imports: [
    AddButtonComponent,
    AddRemoveButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageBasketComponent {
  readonly productId = input.required<number>();
  readonly productsStore = inject(ProductsStore);
  readonly product = computed(() => this.productsStore.products().find(product => product.id === this.productId()));
  readonly numberItems = computed(() => this.product() ? this.productsStore.basket().find(product => product.id === this.product()!.id)?.numberItems : 0);
}
