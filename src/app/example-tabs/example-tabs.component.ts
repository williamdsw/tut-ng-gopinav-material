import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-tabs',
  templateUrl: './example-tabs.component.html'
})
export class ExampleTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public logChange(selectedIndex: number): void {
    console.log (`current tab index: ${selectedIndex} `);
  }
}
