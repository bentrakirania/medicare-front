import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatinetsComponent } from './patinets.component';

describe('PatinetsComponent', () => {
  let component: PatinetsComponent;
  let fixture: ComponentFixture<PatinetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatinetsComponent]
    });
    fixture = TestBed.createComponent(PatinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
