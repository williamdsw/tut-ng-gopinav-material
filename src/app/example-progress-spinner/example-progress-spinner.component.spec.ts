import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleProgressSpinnerComponent } from './example-progress-spinner.component';

describe('ExampleProgressSpinnerComponent', () => {
  let component: ExampleProgressSpinnerComponent;
  let fixture: ComponentFixture<ExampleProgressSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleProgressSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
