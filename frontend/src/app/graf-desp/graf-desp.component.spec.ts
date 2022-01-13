import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafDespComponent } from './graf-desp.component';

describe('GrafDespComponent', () => {
  let component: GrafDespComponent;
  let fixture: ComponentFixture<GrafDespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafDespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafDespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
