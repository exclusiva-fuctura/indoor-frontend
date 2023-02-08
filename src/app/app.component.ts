import { Component } from '@angular/core';
import { faBars, faBullhorn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'indoor-frontend';
  showMenu = false;

  // icones
  faMegaphone = faBullhorn;
  faBars = faBars;

}
