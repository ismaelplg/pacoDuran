import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: 'home',
        title: 'home',
        loadComponent: () => import('./modules/home/home.component'),
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./modules/about/about.component'),
      },
      {
        path: 'discography',
        title: 'Discography',
        loadComponent: () =>
          import('./modules/discography/discography.component'),
      },
      {
        path: 'contact',
        title: 'Contact',
        loadComponent: () => import('./modules/contact/contact.component'),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
