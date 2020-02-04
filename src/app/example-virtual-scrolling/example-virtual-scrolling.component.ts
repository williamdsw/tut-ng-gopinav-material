import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-virtual-scrolling',
  templateUrl: './example-virtual-scrolling.component.html',
  styleUrls: ['./example-virtual-scrolling.component.css']
})
export class ExampleVirtualScrollingComponent implements OnInit {

  numbers: number[] = [];

  constructor() {
    for (let index = 0; index < 1000; index++) {
      this.numbers.push (index);
    }
   }

  ngOnInit() {
  }

}
