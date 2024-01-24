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
  },
  {
    path: 'shop',
    loadComponent: () => import('./1-feature/shop/shop.component')
  },
  {
    path: 'basket',
    loadComponent: () => import('./1-feature/basket/basket.component')
  },
  {
    path: 'who-we-are',
    loadComponent: () => import('./1-feature/who-we-are/who-we-are.component')
  },
  {
    path: 'new-stand',
    loadComponent: () => import('./1-feature/new-stand/new-stand.component')
  },
  {
    path: 'how-to-find-us',
    loadComponent: () => import('./1-feature/how-to-find-us/how-to-find-us.component')
  }
];
