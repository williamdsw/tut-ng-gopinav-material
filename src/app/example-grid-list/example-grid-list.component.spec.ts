import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleGridListComponent } from './example-grid-list.component';

describe('ExampleGridListComponent', () => {
  let component: ExampleGridListComponent;
  let fixture: ComponentFixture<ExampleGridListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
