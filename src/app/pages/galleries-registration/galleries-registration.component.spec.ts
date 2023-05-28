import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesRegistrationComponent } from './galleries-registration.component';

describe('GalleriesRegistrationComponent', () => {
  let component: GalleriesRegistrationComponent;
  let fixture: ComponentFixture<GalleriesRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleriesRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleriesRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
