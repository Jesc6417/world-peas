import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';

@Component({
  selector: 'app-add-remove-button',
  standalone: true,
  imports: [],
  template: `
      <div class="buttons">
          <a (click)="onRemoveProduct.emit()" class="action">-</a>
          <span>{{ currentValue() }}</span>
          @if (!max() || currentValue() < max()!) {
              <a (click)="onAddProduct.emit()" class="action">+</a>
          } @else {
              <span class="max">Qté max</span>
          }
      </div>
  `,
  styles: `
      @import 'variables';

      .buttons {
          border-radius: 25px;
          background-color: $ primary-color;
          color: white;

          width: 100px;
          height: 40px;

          display: flex;
          justify-content: space-around;
          align-items: center;

          span {
              user-select: none;
          }

          a {
              cursor: pointer;
              user-select: none;

              font-size: 25px;
          }

          .max {
              width: 20px;

              font-size: 11px;
          }
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRemoveButtonComponent {
  max = input<number | null>(null);
  currentValue = input<number>(0);
  
  onAddProduct = output();
  onRemoveProduct = output();
}
