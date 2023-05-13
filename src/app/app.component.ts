import {AfterViewInit, Component} from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as anime from 'animejs/lib/anime.es.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3wWAvRULyOrD8_LtdtBuGImUZUZe20L4",
  authDomain: "portfolio-840eb.firebaseapp.com",
  projectId: "portfolio-840eb",
  storageBucket: "portfolio-840eb.appspot.com",
  messagingSenderId: "976037235609",
  appId: "1:976037235609:web:f8fa0057929f2020762108",
  measurementId: "G-YFT29P04BE"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(this.app);

  ngAfterViewInit(): void {
    // Wrap every letter in a span
    let textWrapper = document.querySelector('.an-2');
    if(textWrapper?.textContent == null) return;
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.default.timeline({loop: true})
      .add({
        targets: '.an-2 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      }).add({
      targets: '.an-2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }
}
