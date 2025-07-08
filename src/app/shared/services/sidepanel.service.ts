import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidePanelService {
  public sidePanel = signal<boolean>(false);

  toggleSidePanel() {
    this.sidePanel.update((v) => !v);
  }
}
