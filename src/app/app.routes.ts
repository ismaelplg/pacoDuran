import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/portfolio/portfolio.component'),
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component'),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
