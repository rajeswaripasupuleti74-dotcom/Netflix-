import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollywoodmoviesComponent } from './hollywoodmovies.component';

describe('HollywoodmoviesComponent', () => {
  let component: HollywoodmoviesComponent;
  let fixture: ComponentFixture<HollywoodmoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HollywoodmoviesComponent]
    });
    fixture = TestBed.createComponent(HollywoodmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
