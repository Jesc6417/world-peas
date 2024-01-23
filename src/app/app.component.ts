import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './2-common/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true, imports: [ RouterOutlet, HeaderComponent ],
  template: `
    <div class="container">
      <app-header />
      <router-outlet></router-outlet>
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

    app-header {
      width: 100%;
      }
  `],
})
export class AppComponent {
}
