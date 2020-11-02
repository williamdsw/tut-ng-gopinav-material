import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-badges',
  templateUrl: './example-badges.component.html',
  styleUrls: ['./example-badges.component.css']
})
export class ExampleBadgesComponent implements OnInit {

  public numberOfNotifications: number;

  constructor() {
    this.numberOfNotifications = 10;
   }

  ngOnInit() {}

}
