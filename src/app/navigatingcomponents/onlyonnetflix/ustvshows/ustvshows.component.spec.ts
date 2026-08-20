import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstvshowsComponent } from './ustvshows.component';

describe('UstvshowsComponent', () => {
  let component: UstvshowsComponent;
  let fixture: ComponentFixture<UstvshowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UstvshowsComponent]
    });
    fixture = TestBed.createComponent(UstvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
