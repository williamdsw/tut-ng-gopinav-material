import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ExampleTypographyComponent } from './example-typography/example-typography.component';
import { ExampleButtonsComponent } from './example-buttons/example-buttons.component';
import { ExampleButtonToggleComponent } from './example-button-toggle/example-button-toggle.component';
import { ExampleIconComponent } from './example-icon/example-icon.component';
import { ExampleBadgesComponent } from './example-badges/example-badges.component';
import { ExampleProgressSpinnerComponent } from './example-progress-spinner/example-progress-spinner.component';
import { ExampleProgressBarComponent } from './example-progress-bar/example-progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleTypographyComponent,
    ExampleButtonsComponent,
    ExampleButtonToggleComponent,
    ExampleIconComponent,
    ExampleBadgesComponent,
    ExampleProgressSpinnerComponent,
    ExampleProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
