import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidePanelService } from '../../services/sidepanel.service';
import {
  fadeInOutAnimation,
  slideInAnimation,
} from '../../animations/animations';

@Component({
  selector: 'shared-sidepanel',
  imports: [],
  templateUrl: './sidemenu.component.html',
  animations: [slideInAnimation, fadeInOutAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  sidePanelService = inject(SidePanelService);
}
