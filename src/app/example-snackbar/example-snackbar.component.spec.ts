import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleSnackbarComponent } from './example-snackbar.component';

describe('ExampleSnackbarComponent', () => {
  let component: ExampleSnackbarComponent;
  let fixture: ComponentFixture<ExampleSnackbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
