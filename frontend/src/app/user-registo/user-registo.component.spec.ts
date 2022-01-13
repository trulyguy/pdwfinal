import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistoComponent } from './user-registo.component';

describe('UserRegistoComponent', () => {
  let component: UserRegistoComponent;
  let fixture: ComponentFixture<UserRegistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
