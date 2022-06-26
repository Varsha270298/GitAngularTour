import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTourinfoComponent } from './add-tourinfo.component';

describe('AddTourinfoComponent', () => {
  let component: AddTourinfoComponent;
  let fixture: ComponentFixture<AddTourinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTourinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTourinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
