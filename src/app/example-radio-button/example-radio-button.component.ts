import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-radio-button',
  templateUrl: './example-radio-button.component.html',
  styleUrls: ['./example-radio-button.component.css']
})
export class ExampleRadioButtonComponent implements OnInit {

  currentValue: string;

  constructor() { }

  ngOnInit() {
  }

}
