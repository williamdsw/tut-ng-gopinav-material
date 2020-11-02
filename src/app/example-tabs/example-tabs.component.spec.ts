import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleTabsComponent } from './example-tabs.component';

describe('ExampleTabsComponent', () => {
  let component: ExampleTabsComponent;
  let fixture: ComponentFixture<ExampleTabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
