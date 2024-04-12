import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {SectionComponent} from "./section/section.component";
import {SocialNetworkComponent} from "./social-network/social-network.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SvgIconComponent,
    SectionComponent,
    SocialNetworkComponent
  ],
  template: `
    <footer class="footer">
        <app-section>
            <h3 title>Services</h3>
            <ul items>
                <li>Shop</li>
                <li>Online Command</li>
                <li>Reservations</li>
            </ul>
        </app-section>
        <app-section>
            <h3 title>About</h3>
            <ul items>
                <li>Who we are</li>
                <li>How to find us</li>
                <li>Newstand</li>
            </ul>
        </app-section>
        <app-section>
            <h3 title>Careers</h3>
            <ul items>
                <li>Job openings</li>
                <li>Employee success</li>
                <li>Benefits</li>
            </ul>
        </app-section>
        <app-social-network />
        <p class="disclaimer">World Peas © 2024</p>
    </footer>
  `,
  styles: `
  @import "variables.scss";
  
  footer {
    padding: 20px;
    height: 300px;
    background-color: $primary-color;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 32px;
    
    text-align: center;
    color: #fff;
    
    h3 {
        margin-top: 30px;
        
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 2px;
      }
      
      ul {
      list-style-type: none;
      padding: 0;
      
      margin-top: 35px;
      
      li {
        line-height: 2;
        cursor: pointer;
      }
    }
    
    app-social-network, .disclaimer {
      grid-column: 2;
      place-self: center;
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
