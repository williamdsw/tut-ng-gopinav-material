import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTooltipComponent } from './example-tooltip.component';

describe('ExampleTooltipComponent', () => {
  let component: ExampleTooltipComponent;
  let fixture: ComponentFixture<ExampleTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
