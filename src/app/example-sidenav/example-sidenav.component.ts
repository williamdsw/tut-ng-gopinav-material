import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-sidenav',
  templateUrl: './example-sidenav.component.html',
  styleUrls: ['./example-sidenav.component.css']
})
export class ExampleSidenavComponent implements OnInit {

  isOpened: boolean;

  constructor() {
    this.isOpened = false;
   }

  ngOnInit() {
  }

  onToggleOpened() {
    this.isOpened = !this.isOpened;
  }

  log(state) {
    console.log (state);
  }

}
