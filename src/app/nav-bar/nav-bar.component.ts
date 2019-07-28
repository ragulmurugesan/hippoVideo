import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navOptions: string[];
  activeNavIndex: number = 0;
  displayMobileMenu: boolean = false;
  constructor() { }

  ngOnInit() {
    this.navOptions = ['Features', 'Resources', 'Solutions', 'Integrations', 'Pricing'];
  }

  onNavClick(index) {
    this.activeNavIndex = index;
  }

  toggleMobileMenu() {
    this.displayMobileMenu = !this.displayMobileMenu;
  }

}
