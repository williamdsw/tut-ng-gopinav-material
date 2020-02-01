import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS]
})
export class MaterialModule { }
