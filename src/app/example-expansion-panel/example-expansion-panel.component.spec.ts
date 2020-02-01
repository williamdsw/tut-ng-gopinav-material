import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleExpansionPanelComponent } from './example-expansion-panel.component';

describe('ExampleExpansionPanelComponent', () => {
  let component: ExampleExpansionPanelComponent;
  let fixture: ComponentFixture<ExampleExpansionPanelComponent>;

  beforeEach(async(() => {
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
