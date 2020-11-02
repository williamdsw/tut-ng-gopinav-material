import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleAutocompleteComponent } from './example-autocomplete.component';

describe('ExampleAutocompleteComponent', () => {
  let component: ExampleAutocompleteComponent;
  let fixture: ComponentFixture<ExampleAutocompleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
