import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CustomSnackBarComponent } from '../custom-snack-bar/custom-snack-bar.component';

@Component({
  selector: 'app-example-snackbar',
  templateUrl: './example-snackbar.component.html'
})
export class ExampleSnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {}

  public openSnackBar(message: string, action: string): void {
    const snackBarRef = this.snackBar.open (message, action, { duration: 2000});
    snackBarRef.afterDismissed ().subscribe (() => {
      console.log ('The snackbar was dismissed');
    });

    snackBarRef.onAction ().subscribe (() => {
      console.log ('The snackbar action was triggered!');
    });
  }

  public openCustomSnackBar(): void {
    this.snackBar.openFromComponent (CustomSnackBarComponent, { duration: 2000 });
  }

}
