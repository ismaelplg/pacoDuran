import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
