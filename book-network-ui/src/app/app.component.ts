import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {faCoffee, faDoorOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-network-ui';
  protected readonly faCoffee = faCoffee;
  protected readonly faDoorOpen = faDoorOpen;
}
