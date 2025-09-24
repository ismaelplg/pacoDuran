import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioComponent } from '../../shared/components/portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  imports: [PortfolioComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
