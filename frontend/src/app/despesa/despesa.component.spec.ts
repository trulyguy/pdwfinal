import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaComponent } from './despesa.component';

describe('DespesaComponent', () => {
  let component: DespesaComponent;
  let fixture: ComponentFixture<DespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
