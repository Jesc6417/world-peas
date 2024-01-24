import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-how-to-find-us',
  standalone: true,
  imports: [],
  template: `
    <p>
      how-to-find-us works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowToFindUsComponent {

}

export default HowToFindUsComponent;