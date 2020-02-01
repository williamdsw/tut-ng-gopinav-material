import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
];

@NgModule({
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS]
})
export class MaterialModule { }
