import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ExampleTabsComponent } from './example-tabs/example-tabs.component';
import { ExampleStepperComponent } from './example-stepper/example-stepper.component';
import { ExampleInputComponent } from './example-input/example-input.component';
import { ExampleSelectComponent } from './example-select/example-select.component';
import { ExampleAutocompleteComponent } from './example-autocomplete/example-autocomplete.component';
import { ExampleCheckboxComponent } from './example-checkbox/example-checkbox.component';
import { ExampleRadioButtonComponent } from './example-radio-button/example-radio-button.component';
import { ExampleDatePickerComponent } from './example-date-picker/example-date-picker.component';
import { ExampleTooltipComponent } from './example-tooltip/example-tooltip.component';


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
    ExampleCardComponent,
    ExampleTabsComponent,
    ExampleStepperComponent,
    ExampleInputComponent,
    ExampleSelectComponent,
    ExampleAutocompleteComponent,
    ExampleCheckboxComponent,
    ExampleRadioButtonComponent,
    ExampleDatePickerComponent,
    ExampleTooltipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
