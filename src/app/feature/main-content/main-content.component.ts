import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  public selectedTabIndex: number = 3;
  public tabInfo: any;
  constructor() { }

  ngOnInit() {
    this.tabInfo = ['Create', 'Edit', 'Customize', 'Share', 'Analyze', 'Engage'];
  }

  onTabClick(i){
    this.selectedTabIndex = i;
  }

}
