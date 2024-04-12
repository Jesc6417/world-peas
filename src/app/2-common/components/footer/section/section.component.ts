import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  template: `
      <div class="section">
          <div class="title">
              <ng-content select="[title]"></ng-content>
          </div>
          <ng-content select="[items]"></ng-content>
      </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {

}
