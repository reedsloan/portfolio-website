import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  scrollToTargetAdjusted(target: string): void {
    let element = document.getElementById(target);
    let headerOffset = 45;
    if (element) {
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  menuCollapsed = true;

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleMenu(): void {
    this.menuCollapsed = !this.menuCollapsed;
  }
}
