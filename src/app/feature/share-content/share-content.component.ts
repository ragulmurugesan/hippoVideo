import { Component, OnInit } from '@angular/core';

interface IFeaturesInfo{
  id: number,
  title: string,
  logo: string,
  description: string
}
@Component({
  selector: 'app-share-content',
  templateUrl: './share-content.component.html',
  styleUrls: ['./share-content.component.scss']
})
export class ShareContentComponent implements OnInit {
  shareFeaturesInfo: IFeaturesInfo[];
  integrationInfo: string[];

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.shareFeaturesInfo = [
      { id: 1, title: 'Share', logo: 'share-1', description: 'Share your video online via social channels or email' },
      { id: 2, title: 'Export', logo: 'share-2', description: 'Export videos to Youtube, Vimeo and Google Suite' },
      { id: 3, title: 'Embed', logo: 'share-3', description: 'Embed your videos anywhere. Adapts to any screen.' },
      { id: 4, title: 'Guest Record', logo: 'share-4', description: 'Ask anyone to record a video from a shareable link' }
    ];
    this.integrationInfo = [
      'fe-d2l',
      'fe-gdocs',
      'fe-slack',
      'fe-trello',
      'fe-gmail'
    ];
  }

}
