import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadComponent: () => import('./1-feature/homepage/homepage.component')
  }
];
