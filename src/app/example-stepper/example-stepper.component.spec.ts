import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleStepperComponent } from './example-stepper.component';

describe('ExampleStepperComponent', () => {
  let component: ExampleStepperComponent;
  let fixture: ComponentFixture<ExampleStepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
