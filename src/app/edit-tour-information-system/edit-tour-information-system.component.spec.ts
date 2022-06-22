import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTourInformationSystemComponent } from './edit-tour-information-system.component';

describe('EditTourInformationSystemComponent', () => {
  let component: EditTourInformationSystemComponent;
  let fixture: ComponentFixture<EditTourInformationSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTourInformationSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTourInformationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
