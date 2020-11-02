import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleDialogComponent } from './example-dialog.component';

describe('ExampleDialogComponent', () => {
  let component: ExampleDialogComponent;
  let fixture: ComponentFixture<ExampleDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
