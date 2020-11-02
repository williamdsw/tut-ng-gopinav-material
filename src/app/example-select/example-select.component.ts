import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-select',
  templateUrl: './example-select.component.html'
})
export class ExampleSelectComponent implements OnInit {

  public selectedValue: string;
  public otherSelectedValue: string;
  public anotherSelectedValue: string;

  constructor() { }

  ngOnInit() {}

}
