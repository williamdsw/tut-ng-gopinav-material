import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-date-picker',
  templateUrl: './example-date-picker.component.html'
})
export class ExampleDatePickerComponent implements OnInit {

  public minDate = new Date ();
  public maxDate = new Date (2020, 10, 15);

  constructor() { }

  ngOnInit() {}

  public dateFilter = (date) => {
    const day = date.getDay ();
    return day !== 0 && day !== 6;
  }

}
