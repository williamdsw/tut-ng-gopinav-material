import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-progress-spinner',
  templateUrl: './example-progress-spinner.component.html'
})
export class ExampleProgressSpinnerComponent implements OnInit {

  public showSpinner: boolean;
  public spinnerValue: number;

  constructor() {
    this.showSpinner = false;
    this.spinnerValue = 0;
   }

  ngOnInit() {}

  public loadData(): void {
    this.showSpinner = true;
    setTimeout (() => {
      this.showSpinner = false;
    }, 5000);
  }

  public fillSpinner(): void {
    this.spinnerValue = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        this.spinnerValue++;

        if (this.spinnerValue === 100) {
          clearInterval(interval);
        }
      }, 10);
    }, 1000);
  }

}
