import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdoctorComponent } from './updoctor.component';

describe('UpdoctorComponent', () => {
  let component: UpdoctorComponent;
  let fixture: ComponentFixture<UpdoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdoctorComponent]
    });
    fixture = TestBed.createComponent(UpdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
