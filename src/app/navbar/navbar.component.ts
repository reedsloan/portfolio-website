import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuCollapsed = true;

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleMenu(): void {
    this.menuCollapsed = !this.menuCollapsed;
  }
}
