import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-tabs',
  templateUrl: './example-tabs.component.html',
  styleUrls: ['./example-tabs.component.css']
})
export class ExampleTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logChange(selectedIndex: number) {
    console.log (`current tab index: ${selectedIndex} `);
  }

}
