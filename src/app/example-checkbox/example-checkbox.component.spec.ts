import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleCheckboxComponent } from './example-checkbox.component';

describe('ExampleCheckboxComponent', () => {
  let component: ExampleCheckboxComponent;
  let fixture: ComponentFixture<ExampleCheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
