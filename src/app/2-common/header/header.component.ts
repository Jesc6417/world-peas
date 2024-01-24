import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true, imports: [ MenuComponent ],
  template: `
    <nav>
      <span class="company">World Peas</span>
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

      .company {
        color: #426B1F;

        font-family: 'Newsreader', serif;
        font-size: 32px;
        font-weight: 500;

      }
    }
  `]
})
export class HeaderComponent {

}
