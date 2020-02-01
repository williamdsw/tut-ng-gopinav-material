import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleProgressSpinnerComponent } from './example-progress-spinner.component';

describe('ExampleProgressSpinnerComponent', () => {
  let component: ExampleProgressSpinnerComponent;
  let fixture: ComponentFixture<ExampleProgressSpinnerComponent>;

  beforeEach(async(() => {
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
