import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true, imports: [ MenuComponent, RouterLink ],
  template: `
    <nav>
      <span class="company"><a routerLink="/">World Peas</a></span>
      <app-menu />
    </nav>
  `,
  styles: [`
    nav {
      height: 110px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 96px;

      .company a {
        color: #426B1F;
        text-decoration: none;  

        font-family: 'Newsreader', serif;
        font-size: 32px;
        font-weight: 500;

      }
    }
  `]
})
export class HeaderComponent {

}
