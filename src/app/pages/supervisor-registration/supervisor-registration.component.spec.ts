import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorRegistrationComponent } from './supervisor-registration.component';

describe('SupervisorRegistrationComponent', () => {
  let component: SupervisorRegistrationComponent;
  let fixture: ComponentFixture<SupervisorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
