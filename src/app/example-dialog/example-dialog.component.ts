import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DialogExampleComponent } from './../dialog-example/dialog-example.component';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html'
})
export class ExampleDialogComponent implements OnInit {

  public dialogConfig: MatDialogConfig = {
    data: { name: 'Vishwas' }
  };

  @ViewChild('result', {static: true})
  private elementResult: ElementRef;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open (DialogExampleComponent, this.dialogConfig);
    dialogRef.afterClosed ().subscribe (result => {
      console.log (`Dialog result : ${result}`);
      this.elementResult.nativeElement.textContent = result;
    });
  }

}
