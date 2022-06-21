import { TestBed } from '@angular/core/testing';

import { DramasService } from './dramas.service';

describe('DramasService', () => {
  let service: DramasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DramasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
