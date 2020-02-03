import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-select',
  templateUrl: './example-select.component.html',
  styleUrls: ['./example-select.component.css']
})
export class ExampleSelectComponent implements OnInit {

  selectedValue: string;
  otherSelectedValue: string;
  anotherSelectedValue: string;

  constructor() { }

  ngOnInit() {
  }

}
