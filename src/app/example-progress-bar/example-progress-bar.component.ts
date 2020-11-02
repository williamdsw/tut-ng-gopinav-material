import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-progress-bar',
  templateUrl: './example-progress-bar.component.html',
  styleUrls: ['./example-progress-bar.component.css']
})
export class ExampleProgressBarComponent implements OnInit {

  public progressValue: number;

  constructor() {
    this.progressValue = 0;
   }

  ngOnInit() {}

  public fillProgressBar(): void {
    this.progressValue = 0;

    setTimeout(() => {
      const intervalId = setInterval (() => {
        this.progressValue += 1;
        if (this.progressValue > 100) {
          clearInterval (intervalId);
        }
      }, 10);
    }, 1000);
  }

}
