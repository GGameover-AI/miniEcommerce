import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isToggleFillter = false

  toggleFillter() {
    this.isToggleFillter = !this.isToggleFillter
    console.log("isFillterOpen : " + this.isToggleFillter)
  }
}
