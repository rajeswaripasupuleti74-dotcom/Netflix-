import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindilanguagemoviesComponent } from './hindilanguagemovies.component';

describe('HindilanguagemoviesComponent', () => {
  let component: HindilanguagemoviesComponent;
  let fixture: ComponentFixture<HindilanguagemoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HindilanguagemoviesComponent]
    });
    fixture = TestBed.createComponent(HindilanguagemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
