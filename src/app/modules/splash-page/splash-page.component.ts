import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SplashService } from '../../shared/services/splash.service';

@Component({
  selector: 'app-splash-page',
  imports: [RouterLink],
  templateUrl: './splash-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SplashPageComponent implements OnInit {
  splashService = inject(SplashService);

  ngOnInit(): void {
    this.splashService.isVisited.set(true);
    console.log(this.splashService.isVisited());
  }
}
