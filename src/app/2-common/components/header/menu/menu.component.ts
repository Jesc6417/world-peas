import {Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductsStore} from "@world-peas/infrastructure";

@Component({
  selector: 'app-menu',
  standalone: true, imports: [RouterModule],
  template: `
    <div class="container-menu">
      <ul>
        <li routerLinkActive="active"><a routerLink="/shop" routerLinkActive="active" data-menu="shop">Shop</a></li>
        <li routerLinkActive="active"><a routerLink="/new-stand" routerLinkActive="active" data-menu="new-stand">Newstand</a></li>
        <li routerLinkActive="active"><a routerLink="/who-we-are" routerLinkActive="active" data-menu="who-we-are">Who we are</a></li>
        <li routerLinkActive="active"><a routerLink="/how-to-find-us" routerLinkActive="active" data-menu="how-to-find-us">How to find us</a></li>
        <li routerLinkActive="active"><a routerLink="/basket" routerLinkActive="active" data-menu="basket">Basket ({{numberItemsBought()}})</a></li>
      </ul>
    </div>
  `,
  styles: [`
      li.active {
          background-color: rgb(66, 107, 31);
          border-radius: 8px;

      }
          li.active a.active {
              color: #fff !important;
            
          }
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

        input {
            padding: 13px 23px;

            font-size: 16px;
            font-weight: 600;
            font-family: 'Inter', sans-serif;

            color: #fff;

            cursor: pointer;

            border-radius: 8px;
            border: none;
            background-color: #426B1F;
        }
    }
  `]
})
export class MenuComponent {
  readonly numberItemsBought = inject(ProductsStore).numberItemsBought;
}
