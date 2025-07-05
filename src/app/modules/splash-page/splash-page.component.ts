import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-splash-page",
  imports: [],
  templateUrl: "./splash-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SplashPageComponent {}
