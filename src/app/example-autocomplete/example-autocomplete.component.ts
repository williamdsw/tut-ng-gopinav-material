import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-example-autocomplete',
  templateUrl: './example-autocomplete.component.html',
  styleUrls: ['./example-autocomplete.component.css']
})
export class ExampleAutocompleteComponent implements OnInit {

  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' }
  ];

  myControl = new FormControl ();
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe (startWith (''),
    map (value => this.filter (value)));
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter (option => option.toLowerCase ().includes (filterValue));
  }

  displaySubject(subject) {
    return subject ? subject.name : undefined;
  }

}
