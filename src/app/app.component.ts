import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faBullhorn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {}

  title = 'indoor-frontend';
  showMenu = false;

  // icones
  faMegaphone = faBullhorn;
  faBars = faBars;

  onClickMenu(): void {
    this.showMenu = !this.showMenu;
  }

  onClickSimulador(): void {
    this.showMenu = false;
    this.router.navigate(['/visualizador']);
  }

  onClickNoticias(): void {
    this.showMenu = false;
    this.router.navigate(['/noticia']);
  }
}
