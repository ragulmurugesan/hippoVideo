import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public navOptions: string[];
  public activeNavIndex: number = 0;
  public displayMobileMenu: boolean = false;
  constructor() { }

  ngOnInit() {
    this.navOptions = ['Features', 'Resources', 'Solutions', 'Integrations', 'Pricing'];
  }
  /**
   * Method fires when the tab is clicked
   * @param index Receives the index of the nav tab clicked
   */
  onNavClick(index) {
    this.activeNavIndex = index;
  }
  /**
   * Method to handle the overlay menu in Mobile view
   */
  toggleMobileMenu() {
    this.displayMobileMenu = !this.displayMobileMenu;
  }

}
