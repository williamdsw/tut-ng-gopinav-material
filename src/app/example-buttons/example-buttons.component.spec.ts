import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleButtonsComponent } from './example-buttons.component';

describe('ExampleButtonsComponent', () => {
  let component: ExampleButtonsComponent;
  let fixture: ComponentFixture<ExampleButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
