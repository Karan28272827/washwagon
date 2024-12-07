import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundrySelectionComponent } from './laundry-selection.component';

describe('LaundrySelectionComponent', () => {
  let component: LaundrySelectionComponent;
  let fixture: ComponentFixture<LaundrySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaundrySelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaundrySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
