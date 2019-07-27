import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeaturesComponent } from './features.component';
import { ShareContentComponent } from './share-content/share-content.component';

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
