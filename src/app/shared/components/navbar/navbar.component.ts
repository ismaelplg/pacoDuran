import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidePanelService } from '../../services/sidepanel.service';

@Component({
  selector: 'shared-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  sidePanelService = inject(SidePanelService);
}
