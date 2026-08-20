import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardwinningtvshowsComponent } from './awardwinningtvshows.component';

describe('AwardwinningtvshowsComponent', () => {
  let component: AwardwinningtvshowsComponent;
  let fixture: ComponentFixture<AwardwinningtvshowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwardwinningtvshowsComponent]
    });
    fixture = TestBed.createComponent(AwardwinningtvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
