import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleIconComponent } from './example-icon.component';

describe('ExampleIconComponent', () => {
  let component: ExampleIconComponent;
  let fixture: ComponentFixture<ExampleIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
