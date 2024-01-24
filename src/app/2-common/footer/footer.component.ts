import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SvgIconComponent} from "../svg-icon/svg-icon.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  template: `
    <footer class="footer">
        <div class="left">
            <div class="section">
                <h3>Services</h3>
            </div>
            <ul>
                <li>Shop</li>
                <li>Online Command</li>
                <li>Reservations</li>
            </ul>
        </div>
        <div class="middle">
            <div class="section">
                <h3>About</h3>
            </div>
            <ul>
                <li>Who we are</li>
                <li>How to find us</li>
                <li>Newstand</li>
            </ul>
        </div>
        <div class="right">
            <div class="section">
                <h3>Careers</h3>
            </div>
            <ul>
                <li>Job openings</li>
                <li>Employee success</li>
                <li>Benefits</li>
            </ul>
        </div>
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
    </footer>
  `,
  styles: `
  @import "variables.scss";
  
  footer {
    padding: 20px;
    height: 400px;
    background-color: $primary-color;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 32px;
    
    text-align: center;
    color: #fff;
    
    .section {
    
      h3 {
        margin-top: 30px;
        
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 2px;
      }
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
    
    .media {
      margin-top: 30px;
      
      display: flex;
      justify-content: center;
      
      grid-column: 2;
      place-self: center;
      
      app-svg-icon {
        margin: 0 10px;
        
        cursor: pointer;
      }
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
