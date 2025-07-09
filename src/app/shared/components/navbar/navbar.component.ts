import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidePanelService } from '../../services/sidepanel.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app.routes';
import { fadeInOutAnimation } from '../../animations/animations';

@Component({
  selector: 'shared-navbar',
  imports: [RouterLink, RouterLinkActive],
  animations: [fadeInOutAnimation],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  sidePanelService = inject(SidePanelService);

  public menuItems = routes
    .map((r) => r.children ?? [])
    .flat()
    .filter((r) => r)
    .filter((r) => !r.path?.includes('**') && !r.path?.includes('home'));
}
