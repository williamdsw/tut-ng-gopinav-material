import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CustomSnackBarComponent } from '../custom-snack-bar/custom-snack-bar.component';

@Component({
  selector: 'app-example-snackbar',
  templateUrl: './example-snackbar.component.html',
  styleUrls: ['./example-snackbar.component.css']
})
export class ExampleSnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    const snackBarRef = this.snackBar.open (message, action, { duration: 2000});
    snackBarRef.afterDismissed ().subscribe (() => {
      console.log ('The snackbar was dismissed');
    });

    snackBarRef.onAction ().subscribe (() => {
      console.log ('The snackbar action was triggered!');
    });
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent (CustomSnackBarComponent, { duration: 2000 });
  }

}
