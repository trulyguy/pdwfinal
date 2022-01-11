import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassRecoverComponent } from './pass-recover.component';

describe('PassRecoverComponent', () => {
  let component: PassRecoverComponent;
  let fixture: ComponentFixture<PassRecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassRecoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
