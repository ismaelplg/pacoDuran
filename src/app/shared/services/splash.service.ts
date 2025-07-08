import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SplashService {
  isVisited = signal<boolean>(false);

  loadSessionStorage() {
    if (sessionStorage.getItem('isVisited')) return;

    sessionStorage.setItem('isVisited', JSON.stringify(this.isVisited));
  }
}
