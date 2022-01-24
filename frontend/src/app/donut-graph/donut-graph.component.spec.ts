import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutGraphComponent } from './donut-graph.component';

describe('DonutGraphComponent', () => {
  let component: DonutGraphComponent;
  let fixture: ComponentFixture<DonutGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
