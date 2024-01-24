import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SvgIconComponent} from "../../svg-icon/svg-icon.component";

@Component({
  selector: 'app-social-network',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  template: `
      <div class="media">
          <app-svg-icon
                  [path]="'assets/icons/social-network/facebook.svg'"
                  width="30px"
                  height="30px"
                  [backgroundColor]="'#fff'"
          />
          <app-svg-icon
                  [path]="'assets/icons/social-network/instagram.svg'"
                  width="30px"
                  height="30px"
                  [backgroundColor]="'#fff'"
          />
          <app-svg-icon
                  [path]="'assets/icons/social-network/twitter.svg'"
                  width="30px"
                  height="30px"
                  [backgroundColor]="'#fff'"
          />
      </div>
  `,
  styles: `
  .media {
      margin-top: 30px;
      
      display: flex;
      justify-content: center;

      app-svg-icon {
        margin: 0 10px;
        
        cursor: pointer;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialNetworkComponent {

}
