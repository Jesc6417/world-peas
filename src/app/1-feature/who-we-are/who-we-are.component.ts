import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [],
  template: `
    <p>
      who-we-are works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoWeAreComponent {

}

export default WhoWeAreComponent;