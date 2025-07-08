import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: 'splash',
        loadComponent: () => import('./modules/home/home.component'),
      },
      {
        path: '**',
        redirectTo: 'splash',
      },
    ],
  },
];
