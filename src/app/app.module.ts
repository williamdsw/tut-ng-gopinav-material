import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ExampleTypographyComponent } from './example-typography/example-typography.component';
import { ExampleButtonsComponent } from './example-buttons/example-buttons.component';
import { ExampleButtonToggleComponent } from './example-button-toggle/example-button-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleTypographyComponent,
    ExampleButtonsComponent,
    ExampleButtonToggleComponent
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
