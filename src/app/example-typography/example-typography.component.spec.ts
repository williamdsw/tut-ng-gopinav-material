import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleTypographyComponent } from './example-typography.component';

describe('ExampleTypographyComponent', () => {
  let component: ExampleTypographyComponent;
  let fixture: ComponentFixture<ExampleTypographyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
