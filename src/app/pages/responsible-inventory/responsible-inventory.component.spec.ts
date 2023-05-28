import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleInventoryComponent } from './responsible-inventory.component';

describe('ResponsibleInventoryComponent', () => {
  let component: ResponsibleInventoryComponent;
  let fixture: ComponentFixture<ResponsibleInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibleInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibleInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
