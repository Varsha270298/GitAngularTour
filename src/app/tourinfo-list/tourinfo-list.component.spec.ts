import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourinfoListComponent } from './tourinfo-list.component';

describe('TourinfoListComponent', () => {
  let component: TourinfoListComponent;
  let fixture: ComponentFixture<TourinfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourinfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourinfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
