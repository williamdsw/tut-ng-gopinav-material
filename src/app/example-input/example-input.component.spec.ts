import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleInputComponent } from './example-input.component';

describe('ExampleInputComponent', () => {
  let component: ExampleInputComponent;
  let fixture: ComponentFixture<ExampleInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
