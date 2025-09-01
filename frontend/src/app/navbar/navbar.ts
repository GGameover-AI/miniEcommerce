import { Component } from '@angular/core';
import { NgClass } from '@angular/common'; 

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isToggleFillter = false

  toggleFillter() {
    this.isToggleFillter = !this.isToggleFillter
  }

  
}
