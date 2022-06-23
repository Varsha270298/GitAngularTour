import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourInformationSystemListComponent } from './tour-information-system-list.component';

describe('TourInformationSystemListComponent', () => {
  let component: TourInformationSystemListComponent;
  let fixture: ComponentFixture<TourInformationSystemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourInformationSystemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourInformationSystemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
