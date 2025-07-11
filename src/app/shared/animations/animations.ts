import { animate, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = [
  trigger('slideInAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('.3s ease-in-out', style({ transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0)' }),
      animate('.3s ease-in-out', style({ transform: 'translateX(-100%)' })),
    ]),
  ]),
];

export const slideInAnimation2 = [
  trigger('slideInAnimation2', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('.3s ease-in-out', style({ transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0)' }),
      animate('.3s ease-in-out', style({ transform: 'translateY(-100%)' })),
    ]),
  ]),
];

export const fadeInOutAnimation = [
  trigger('fadeInOutAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.3s ease-in', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('.3s ease-out', style({ opacity: 0 })),
    ]),
  ]),
];
