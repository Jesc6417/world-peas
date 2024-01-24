import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ButtonComponent} from "./button/button.component";

@Component({
  selector: 'app-motto',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  template: `
    <p>
        We’re <span class="highlight">farmers</span>, <span class="highlight">purveyors</span>, 
        and <span class="highlight">eaters</span> of organically grown food.
    </p>
    <app-button />
  `,
  styles: `
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 167px;
  }
  p {
    font-family: 'Newsreader', serif;
    font-size: 64px;
    
    text-align: center;
    
    width: 1020px;
    
    margin: 0 0 48px;;
    
    span.highlight {
      font-style: italic;
    }
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MottoComponent {

}
