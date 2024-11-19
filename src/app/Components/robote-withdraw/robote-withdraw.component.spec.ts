import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboteWithdrawComponent } from './robote-withdraw.component';

describe('RoboteWithdrawComponent', () => {
  let component: RoboteWithdrawComponent;
  let fixture: ComponentFixture<RoboteWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboteWithdrawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboteWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
