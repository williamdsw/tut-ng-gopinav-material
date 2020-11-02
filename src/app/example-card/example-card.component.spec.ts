import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleCardComponent } from './example-card.component';

describe('ExampleCardComponent', () => {
  let component: ExampleCardComponent;
  let fixture: ComponentFixture<ExampleCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
