import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRowComponent } from './order-row.component';

describe('OrderRowComponent', () => {
  let component: OrderRowComponent;
  let fixture: ComponentFixture<OrderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
