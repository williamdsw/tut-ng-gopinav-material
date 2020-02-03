import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDatePickerComponent } from './example-date-picker.component';

describe('ExampleDatePickerComponent', () => {
  let component: ExampleDatePickerComponent;
  let fixture: ComponentFixture<ExampleDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
