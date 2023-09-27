import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flyoutMenuState = false;
  howOldAmI = 0;
  birthDate = new Date(2001, 0, 15);

  constructor() { }

  ngOnInit() {
    this.howOldAmI = this.calculateAge(this.birthDate);
  }
  calculateAge(birthDate: Date): number {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }

  toggleFlyoutMenu() {
    this.flyoutMenuState = !this.flyoutMenuState;
  }
}
