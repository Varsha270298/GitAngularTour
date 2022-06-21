import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourinfoEditComponent } from './tourinfo-edit.component';

describe('TourinfoEditComponent', () => {
  let component: TourinfoEditComponent;
  let fixture: ComponentFixture<TourinfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourinfoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourinfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
