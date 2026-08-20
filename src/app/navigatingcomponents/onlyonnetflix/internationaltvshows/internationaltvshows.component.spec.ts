import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationaltvshowsComponent } from './internationaltvshows.component';

describe('InternationaltvshowsComponent', () => {
  let component: InternationaltvshowsComponent;
  let fixture: ComponentFixture<InternationaltvshowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationaltvshowsComponent]
    });
    fixture = TestBed.createComponent(InternationaltvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
