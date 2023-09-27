import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navigateTo(target: string) {
    // if target is about-me and we are not on the homepage, navigate to the homepage
    if (target === 'about-me' && this.router.url !== '/') {
      this.router.navigate(['/']);
      // wait for the router to navigate to the homepage, then scroll to the target
      setTimeout(() => {
        this.scrollToTargetAdjusted(target);
      }, 100);
    } else {
      this.scrollToTargetAdjusted(target);
    }
  }
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
