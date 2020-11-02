import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleRadioButtonComponent } from './example-radio-button.component';

describe('ExampleRadioButtonComponent', () => {
  let component: ExampleRadioButtonComponent;
  let fixture: ComponentFixture<ExampleRadioButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
