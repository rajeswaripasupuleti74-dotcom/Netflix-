import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InabitofhurryComponent } from './inabitofhurry.component';

describe('InabitofhurryComponent', () => {
  let component: InabitofhurryComponent;
  let fixture: ComponentFixture<InabitofhurryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InabitofhurryComponent]
    });
    fixture = TestBed.createComponent(InabitofhurryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
