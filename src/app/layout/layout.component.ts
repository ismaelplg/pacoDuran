import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SidemenuComponent } from '../shared/components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, SidemenuComponent],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {}
