import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'gopinav-angular-material-tutorial';

  public links = [
    { path: 'autocomplete', text: 'Autocomplete' },
    { path: 'badges', text: 'Badges' },
    { path: 'toggle-button', text: 'Toggle Button' },
    { path: 'buttons', text: 'Buttons' },
    { path: 'card', text: 'Card' },
    { path: 'checkbox', text: 'Checkbox' },
    { path: 'data-table', text: 'Data Table' },
    { path: 'date-picker', text: 'Date Picker' },
    { path: 'dialog', text: 'Dialog' },
    { path: 'expansion-panel', text: 'Expansion Panel' },
    { path: 'grid-list', text: 'Grid List' },
    { path: 'icon', text: 'Icon' },
    { path: 'input', text: 'Input' },
    { path: 'list', text: 'List' },
    { path: 'menu', text: 'Menu' },
    { path: 'navbar', text: 'Navbar' },
    { path: 'progress-bar', text: 'Progress Bar' },
    { path: 'progress-spinner', text: 'Progress Spinner' },
    { path: 'radio-button', text: 'Radio Button' },
    { path: 'select', text: 'Select' },
    { path: 'sidenav', text: 'Sidenav' },
    { path: 'snackbar', text: 'Snackbar' },
    { path: 'stepper', text: 'Stepper' },
    { path: 'tabs', text: 'Tabs' },
    { path: 'tooltip', text: 'Tooltip' },
    { path: 'typography', text: 'Typography' },
    { path: 'virtual-scrolling', text: 'Virtual Scrolling' }
  ];
}
