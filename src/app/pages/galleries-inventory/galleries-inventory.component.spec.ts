import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesInventoryComponent } from './galleries-inventory.component';

describe('GalleriesInventoryComponent', () => {
  let component: GalleriesInventoryComponent;
  let fixture: ComponentFixture<GalleriesInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleriesInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleriesInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
