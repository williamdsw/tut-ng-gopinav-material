import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleDatePickerComponent } from './example-date-picker.component';

describe('ExampleDatePickerComponent', () => {
  let component: ExampleDatePickerComponent;
  let fixture: ComponentFixture<ExampleDatePickerComponent>;

  beforeEach(waitForAsync(() => {
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
