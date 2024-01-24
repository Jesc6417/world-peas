import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ButtonHeaderComponent} from "../button/button-header.component";

@Component({
  selector: 'app-menu',
  standalone: true, imports: [RouterLink, ButtonHeaderComponent],
  template: `
    <div class="container-menu">
      <ul>
        <li><a href="#" data-menu="shop">Shop</a></li>
        <li><a href="#" data-menu="newstand">Newstand</a></li>
        <li><a href="#" data-menu="who-we-are">Who we are</a></li>
        <li><a href="#" data-menu="how-to-find-us">How to find us</a></li>
      </ul>
      <app-header-button />
    </div>
  `,
  styles: [`
    .container-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
        
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0;
  
        li {
          margin-right: 48px;
          padding: 13px 10px;
            
          a {
            text-decoration: none;
            color: #000;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: normal;
          }
            &:hover {
             background-color: rgba(66, 107, 31, 0.8);
             border-radius: 8px;
                
                a {
                    color: #fff;
                    
                }
             
            }
        }
      }
    }
  `]
})
export class MenuComponent {

}
