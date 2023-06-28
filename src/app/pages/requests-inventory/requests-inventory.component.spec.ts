import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsInventoryComponent } from './requests-inventory.component';

describe('RequestsInventoryComponent', () => {
  let component: RequestsInventoryComponent;
  let fixture: ComponentFixture<RequestsInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
