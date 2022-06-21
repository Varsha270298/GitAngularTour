import { TestBed } from '@angular/core/testing';

import { TourinfoService } from './tourinfo.service';

describe('TourinfoService', () => {
  let service: TourinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
