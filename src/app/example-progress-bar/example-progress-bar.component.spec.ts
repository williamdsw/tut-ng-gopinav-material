import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleProgressBarComponent } from './example-progress-bar.component';

describe('ExampleProgressBarComponent', () => {
  let component: ExampleProgressBarComponent;
  let fixture: ComponentFixture<ExampleProgressBarComponent>;

  beforeEach(async(() => {
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
