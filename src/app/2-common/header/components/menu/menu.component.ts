import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true, imports: [ RouterLink ],
  template: `
    <ul>
      <li><a href="#" data-menu="shop">Shop</a></li>
      <li><a href="#" data-menu="newstand">Newstand</a></li>
      <li><a href="#" data-menu="who-we-are">Who we are</a></li>
      <li><a href="#" data-menu="my-profile">My profile</a></li>
    </ul>
  `,
  styles: [`
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-right: 48px;
        a {
          text-decoration: none;
          color: #000;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: normal;
        }
      }
    }
  `]
})
export class MenuComponent {

}
