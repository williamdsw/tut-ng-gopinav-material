import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleBadgesComponent } from './example-badges.component';

describe('ExampleBadgesComponent', () => {
  let component: ExampleBadgesComponent;
  let fixture: ComponentFixture<ExampleBadgesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
