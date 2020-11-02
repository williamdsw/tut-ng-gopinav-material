import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleMenuComponent } from './example-menu.component';

describe('ExampleMenuComponent', () => {
  let component: ExampleMenuComponent;
  let fixture: ComponentFixture<ExampleMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
