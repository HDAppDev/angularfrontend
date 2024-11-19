import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboteDepositeComponent } from './robote-deposite.component';

describe('RoboteDepositeComponent', () => {
  let component: RoboteDepositeComponent;
  let fixture: ComponentFixture<RoboteDepositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboteDepositeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboteDepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
