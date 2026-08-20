import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiantvdramasComponent } from './indiantvdramas.component';

describe('IndiantvdramasComponent', () => {
  let component: IndiantvdramasComponent;
  let fixture: ComponentFixture<IndiantvdramasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiantvdramasComponent]
    });
    fixture = TestBed.createComponent(IndiantvdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
