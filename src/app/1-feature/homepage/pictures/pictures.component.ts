import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [],
  template: `
    <div class="container-pictures">
      <img src="./assets/img/vegetables.png" width="504px" height="693px" alt="vegetables" />
      <div class="with-legend">
        <img src="./assets/img/vegetables-paysage.png" width="780px" height="480px" alt="vegetables" />
        <p class="legend"><span class="source">Central California</span> — 
        The person who grew these was located in Central California and, er, hopefully very well-compensated.</p>
      </div>
    </div>
    
  `,
  styles: `
  .container-pictures {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin: 156px 0;
    
    img:first-child {
      margin-right: 60px;
    }
    
    .with-legend {
      margin-bottom: 16px;
      
      .legend {
        font-size: 14px;
        font-weight: 300;
        
        span.source {
          font-weight: 700;
        }
      }
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PicturesComponent {

}
