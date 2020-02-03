import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { ExampleNavbarComponent } from './example-navbar/example-navbar.component';
import { ExampleSidenavComponent } from './example-sidenav/example-sidenav.component';
import { ExampleMenuComponent } from './example-menu/example-menu.component';
import { ExampleListComponent } from './example-list/example-list.component';
import { ExampleGridListComponent } from './example-grid-list/example-grid-list.component';
import { ExampleExpansionPanelComponent } from './example-expansion-panel/example-expansion-panel.component';
import { ExampleCardComponent } from './example-card/example-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleTypographyComponent,
    ExampleButtonsComponent,
    ExampleButtonToggleComponent,
    ExampleIconComponent,
    ExampleBadgesComponent,
    ExampleProgressSpinnerComponent,
    ExampleProgressBarComponent,
    ExampleNavbarComponent,
    ExampleSidenavComponent,
    ExampleMenuComponent,
    ExampleListComponent,
    ExampleGridListComponent,
    ExampleExpansionPanelComponent,
    ExampleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
