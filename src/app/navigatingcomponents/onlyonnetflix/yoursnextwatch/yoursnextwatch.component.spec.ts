import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoursnextwatchComponent } from './yoursnextwatch.component';

describe('YoursnextwatchComponent', () => {
  let component: YoursnextwatchComponent;
  let fixture: ComponentFixture<YoursnextwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoursnextwatchComponent]
    });
    fixture = TestBed.createComponent(YoursnextwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
