import { Component } from '@angular/core';
import {DescriptionComponent} from "./description/description.component";
import {MottoComponent} from "./motto/motto.component";
import {PicturesComponent} from "./pictures/pictures.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    MottoComponent,
    PicturesComponent,
    DescriptionComponent
  ],
  template: `
    <app-motto />
    <app-pictures />
    <app-description />
  `,
  styles: ``
})
export class HomepageComponent {

}

export default HomepageComponent;