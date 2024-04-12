import {animate, state, style, transition, trigger} from "@angular/animations";
import {JsonPipe, NgClass} from "@angular/common";
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {SvgIconComponent} from "@world-peas/common";
import {filterQuery, orderQuery} from "@world-peas/domain";
import {ProductsStore} from "@world-peas/infrastructure";
import {BlackOrWhitePipe} from "../../pipes/black-or-white.pipe";
import {OrderPipe} from "../../pipes/order.pipe";
import {DisplayButtonComponent} from "../display-button/display-button.component";

@Component({
  selector: 'app-shop-header',
  standalone: true,
  imports: [
    DisplayButtonComponent,
    SvgIconComponent,
    NgClass,
    BlackOrWhitePipe,
    JsonPipe,
    OrderPipe,
  ],
  animations: [
    trigger('rotatePriceOrder', [
      state('ascending', style({transform: 'rotate(0)'})),
      state('descending', style({transform: 'rotate(180deg)'})),
      transition('ascending <=> descending', animate('0.5s ease-in-out')),
    ]),
    trigger('rotateAlphabeticalOrder', [
      state('ascending', style({transform: 'rotate(0)'})),
      state('descending', style({transform: 'rotate(180deg)'})),
      transition('ascending <=> descending', animate('0.5s ease-in-out')),
    ]),
  ],
  template: `
      <div class="header">
          <div class="produce">
              <span class="title">Produce</span>
              <span class="sub-title">Fresh</span>
              <span class="date">- August 21, 2023</span>
          </div>
          <div class="display">
              <app-display-button (click)="changeFilter(filters.price)" [selected]="store.filter() === filters.price">
                  <span class="icons">
                      <app-svg-icon
                              [backgroundColor]="store.filter() === filters.price | blackOrWhite"
                              height="20px"
                              width="20px"
                              path="assets/icons/dollar.svg"
                      ></app-svg-icon>
                  </span>
              </app-display-button>
              <app-display-button (click)="changeFilter(filters.name)" [selected]="store.filter() === filters.name">
                  <span class="icons">A-Z</span>
              </app-display-button>
              <app-display-button [selected]="true">
                  <app-svg-icon
                          [@rotatePriceOrder]="store.order() === orders.asc | order"
                          [backgroundColor]="'#fff'"
                          (click)="changeOrder()"
                          height="20px"
                          width="20px"
                          path="assets/icons/sort-amount.svg"
                  ></app-svg-icon>
              </app-display-button>
              <app-display-button (click)="changeDisplay('cards')" [selected]="cardsViewSelected()">
                  Card View
              </app-display-button>
              <app-display-button (click)="changeDisplay('list')" [selected]="!cardsViewSelected()">
                  List view
              </app-display-button>
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
    
    
    .display {
      display: flex;
      align-items: center;
      justify-content: center;
      
      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        
        .space-right {
          margin-right: 0.5rem;
        }
      }
    }
    
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
        font-weight: 600;
      }
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHeaderComponent {
  readonly store = inject(ProductsStore);
  cardsViewSelected = computed(() => this.store.productsView() === 'cards');
  filters = filterQuery;
  orders = orderQuery;
  
  changeDisplay(display: 'cards' | 'list') {
    this.store.changeProductsView(display);
  }
  
  changeOrder() {
    this.store.changerOrder();
  }
  
  changeFilter(filter: filterQuery) {
    this.store.changeFilter(filter);
  }
  
  
}
