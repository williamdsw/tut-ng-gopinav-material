import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleAutocompleteComponent } from './example-autocomplete/example-autocomplete.component';
import { ExampleBadgesComponent } from './example-badges/example-badges.component';
import { ExampleButtonToggleComponent } from './example-button-toggle/example-button-toggle.component';
import { ExampleButtonsComponent } from './example-buttons/example-buttons.component';
import { ExampleCardComponent } from './example-card/example-card.component';
import { ExampleCheckboxComponent } from './example-checkbox/example-checkbox.component';
import { ExampleDataTableComponent } from './example-data-table/example-data-table.component';
import { ExampleDatePickerComponent } from './example-date-picker/example-date-picker.component';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { ExampleExpansionPanelComponent } from './example-expansion-panel/example-expansion-panel.component';
import { ExampleGridListComponent } from './example-grid-list/example-grid-list.component';
import { ExampleIconComponent } from './example-icon/example-icon.component';
import { ExampleInputComponent } from './example-input/example-input.component';
import { ExampleListComponent } from './example-list/example-list.component';
import { ExampleMenuComponent } from './example-menu/example-menu.component';
import { ExampleNavbarComponent } from './example-navbar/example-navbar.component';
import { ExampleProgressBarComponent } from './example-progress-bar/example-progress-bar.component';
import { ExampleProgressSpinnerComponent } from './example-progress-spinner/example-progress-spinner.component';
import { ExampleRadioButtonComponent } from './example-radio-button/example-radio-button.component';
import { ExampleSelectComponent } from './example-select/example-select.component';
import { ExampleSidenavComponent } from './example-sidenav/example-sidenav.component';
import { ExampleSnackbarComponent } from './example-snackbar/example-snackbar.component';
import { ExampleStepperComponent } from './example-stepper/example-stepper.component';
import { ExampleTabsComponent } from './example-tabs/example-tabs.component';
import { ExampleTooltipComponent } from './example-tooltip/example-tooltip.component';
import { ExampleTypographyComponent } from './example-typography/example-typography.component';
import { ExampleVirtualScrollingComponent } from './example-virtual-scrolling/example-virtual-scrolling.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'autocomplete' },
  { path: 'autocomplete', component: ExampleAutocompleteComponent },
  { path: 'badges', component: ExampleBadgesComponent },
  { path: 'toggle-button', component: ExampleButtonToggleComponent },
  { path: 'buttons', component: ExampleButtonsComponent },
  { path: 'card', component: ExampleCardComponent },
  { path: 'checkbox', component: ExampleCheckboxComponent },
  { path: 'data-table', component: ExampleDataTableComponent },
  { path: 'date-picker', component: ExampleDatePickerComponent },
  { path: 'dialog', component: ExampleDialogComponent },
  { path: 'expansion-panel', component: ExampleExpansionPanelComponent },
  { path: 'grid-list', component: ExampleGridListComponent },
  { path: 'icon', component: ExampleIconComponent },
  { path: 'input', component: ExampleInputComponent },
  { path: 'list', component: ExampleListComponent },
  { path: 'menu', component: ExampleMenuComponent },
  { path: 'navbar', component: ExampleNavbarComponent },
  { path: 'progress-bar', component: ExampleProgressBarComponent },
  { path: 'progress-spinner', component: ExampleProgressSpinnerComponent },
  { path: 'radio-button', component: ExampleRadioButtonComponent },
  { path: 'select', component: ExampleSelectComponent },
  { path: 'sidenav', component: ExampleSidenavComponent },
  { path: 'snackbar', component: ExampleSnackbarComponent },
  { path: 'stepper', component: ExampleStepperComponent },
  { path: 'tabs', component: ExampleTabsComponent },
  { path: 'tooltip', component: ExampleTooltipComponent },
  { path: 'typography', component: ExampleTypographyComponent },
  { path: 'virtual-scrolling', component: ExampleVirtualScrollingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
