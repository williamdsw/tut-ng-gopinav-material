import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleProgressBarComponent } from './example-progress-bar.component';

describe('ExampleProgressBarComponent', () => {
  let component: ExampleProgressBarComponent;
  let fixture: ComponentFixture<ExampleProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
