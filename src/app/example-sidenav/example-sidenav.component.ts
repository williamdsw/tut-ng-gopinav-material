import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-sidenav',
  templateUrl: './example-sidenav.component.html',
  styleUrls: ['./example-sidenav.component.css']
})
export class ExampleSidenavComponent implements OnInit {

  public isOpened: boolean;

  constructor() {
    this.isOpened = false;
  }

  ngOnInit() {}

  public onToggleOpened(): void {
    this.isOpened = !this.isOpened;
  }

  public log(state): void {
    console.log (state);
  }

}
