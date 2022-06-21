import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourinfoComponent } from './tourinfo.component';

describe('TourinfoComponent', () => {
  let component: TourinfoComponent;
  let fixture: ComponentFixture<TourinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
