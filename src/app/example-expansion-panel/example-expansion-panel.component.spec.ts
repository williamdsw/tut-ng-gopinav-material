import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleExpansionPanelComponent } from './example-expansion-panel.component';

describe('ExampleExpansionPanelComponent', () => {
  let component: ExampleExpansionPanelComponent;
  let fixture: ComponentFixture<ExampleExpansionPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
