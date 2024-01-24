import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  template: `
    <div class="container-description">
      <span class="title">WHAT WE BELIEVE</span>  
      <p class="question">We believe in produce. Tasty produce. Produce like:</p>
      <p class="description">Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. </p>
      <p class="question">What are we forgetting?</p> 
      <p class="description">Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...</p>
    </div>
  `,
  styles: `
  .container-description {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 4fr;
    grid-column-gap: 32px;
    
    margin-bottom: 167px;
    
    .title {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
    }
    
    p {
      margin: 0;
    }
    
    p.description {
      margin: 16px 0;
    }
    
    p.description:not(:first-child), p.question:not(:first-child) {
      grid-column: 2;
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent {

}
