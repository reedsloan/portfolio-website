import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flyoutMenuState = false;

  constructor() { }

  ngOnInit() { }

  toggleFlyoutMenu() {
    this.flyoutMenuState = !this.flyoutMenuState;
  }
}
