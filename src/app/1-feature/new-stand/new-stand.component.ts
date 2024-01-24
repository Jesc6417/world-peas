import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-stand',
  standalone: true,
  imports: [],
  template: `
    <p>
      new-stand works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewStandComponent {

}

export default NewStandComponent;