import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DialogExampleComponent } from './../dialog-example/dialog-example.component';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.css']
})
export class ExampleDialogComponent implements OnInit {

  dialogConfig: MatDialogConfig = {
    data: { name: 'Vishwas' }
  };

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open (DialogExampleComponent, this.dialogConfig);
    dialogRef.afterClosed ().subscribe (result => {
      console.log (`Dialog result : ${result}`);
    });
  }

}
