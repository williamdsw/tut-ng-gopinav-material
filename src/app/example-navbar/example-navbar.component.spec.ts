import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNavbarComponent } from './example-navbar.component';

describe('ExampleNavbarComponent', () => {
  let component: ExampleNavbarComponent;
  let fixture: ComponentFixture<ExampleNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
