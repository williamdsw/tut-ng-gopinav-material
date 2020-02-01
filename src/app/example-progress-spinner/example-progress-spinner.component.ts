import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-progress-spinner',
  templateUrl: './example-progress-spinner.component.html',
  styleUrls: ['./example-progress-spinner.component.css']
})
export class ExampleProgressSpinnerComponent implements OnInit {

  showSpinner: boolean;

  constructor() {
    this.showSpinner = false;
   }

  ngOnInit() {
  }

  loadData() {
    this.showSpinner = true;
    setTimeout (() => {
      this.showSpinner = false;
    }, 5000);
  }

}
