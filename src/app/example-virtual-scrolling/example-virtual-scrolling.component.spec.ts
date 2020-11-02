import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleVirtualScrollingComponent } from './example-virtual-scrolling.component';

describe('ExampleVirtualScrollingComponent', () => {
  let component: ExampleVirtualScrollingComponent;
  let fixture: ComponentFixture<ExampleVirtualScrollingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleVirtualScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleVirtualScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
