import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-date-picker',
  templateUrl: './example-date-picker.component.html',
  styleUrls: ['./example-date-picker.component.css']
})
export class ExampleDatePickerComponent implements OnInit {

  minDate = new Date ();
  maxDate = new Date (2020, 10, 15);

  constructor() { }

  ngOnInit() {
  }

  dateFilter = date => {
    const day = date.getDay ();
    return day !== 0 && day !== 6;
  }

}
