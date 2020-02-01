import { Component, OnInit } from '@angular/core';
import { MatProgressBar } from '@angular/material';

@Component({
  selector: 'app-example-progress-bar',
  templateUrl: './example-progress-bar.component.html',
  styleUrls: ['./example-progress-bar.component.css']
})
export class ExampleProgressBarComponent implements OnInit {

  progressValue: number;

  constructor() {
    this.progressValue = 0;
   }

  ngOnInit() {
  }

  fillProgressBar() {
    this.progressValue = 0;
    const intervalId = setInterval (() => {
      this.progressValue += 1;
      if (this.progressValue > 100) {
        clearInterval (intervalId);
      }
    }, 10);
  }

}
