import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSubtypeComponent } from './vehicle-subtype.component';

describe('VehicleSubtypeComponent', () => {
  let component: VehicleSubtypeComponent;
  let fixture: ComponentFixture<VehicleSubtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSubtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
