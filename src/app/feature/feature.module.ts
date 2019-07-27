import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [FeaturesComponent, FeatureHeaderComponent,
    MainContentComponent,
    ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
