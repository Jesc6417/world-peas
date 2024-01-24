import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./2-common/footer/footer.component";
import { HeaderComponent } from './2-common/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true, imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="container">
      <app-header />
      <router-outlet />
      <app-footer />
    </div>
  `,
  styles: [`
    .container {
      height: 100%;
      width: 1440px;
      display: flex;
      flex-direction: column;
      align-items: center;

    }

    @media screen and (max-width: 1024px) {
      .container {
        width: 1024px;
      }
    }

    app-header, app-footer {
      width: 100%;
    }
  `],
})
export class AppComponent {
}
