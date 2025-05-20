import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deposit1Component } from './deposit1.component';

describe('Deposit1Component', () => {
  let component: Deposit1Component;
  let fixture: ComponentFixture<Deposit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deposit1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deposit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
