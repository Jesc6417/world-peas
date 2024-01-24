import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [],
  template: `
    <p>
      basket works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent {

}

export default BasketComponent;