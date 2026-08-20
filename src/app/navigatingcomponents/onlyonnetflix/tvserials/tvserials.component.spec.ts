import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvserialsComponent } from './tvserials.component';

describe('TvserialsComponent', () => {
  let component: TvserialsComponent;
  let fixture: ComponentFixture<TvserialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvserialsComponent]
    });
    fixture = TestBed.createComponent(TvserialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
