import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleDataTableComponent } from './example-data-table.component';

describe('ExampleDataTableComponent', () => {
  let component: ExampleDataTableComponent;
  let fixture: ComponentFixture<ExampleDataTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
