import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidePanelService } from '../../services/sidepanel.service';
import {
  fadeInOutAnimation,
  slideInAnimation,
  slideInAnimation2,
} from '../../animations/animations';
import { routes } from '../../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-sidepanel',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidemenu.component.html',
  animations: [slideInAnimation, slideInAnimation2, fadeInOutAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  sidePanelService = inject(SidePanelService);

  public menuItems = routes
    .map((r) => r.children ?? [])
    .flat()
    .filter((r) => r)
    .filter((r) => !r.path?.includes('**') && !r.path?.includes('home'));
}
