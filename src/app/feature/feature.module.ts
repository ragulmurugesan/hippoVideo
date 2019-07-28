import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';

// Components
import { FeaturesComponent } from './features.component';
import { ShareContentComponent } from './share-content/share-content.component';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [FeaturesComponent, FeatureHeaderComponent,
    MainContentComponent,
    ShareContentComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
