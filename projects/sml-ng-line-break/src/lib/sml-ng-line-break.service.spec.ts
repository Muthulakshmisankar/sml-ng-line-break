import { TestBed } from '@angular/core/testing';

import { SmlNgLineBreakService } from './sml-ng-line-break.service';

describe('SmlNgLineBreakService', () => {
  let service: SmlNgLineBreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmlNgLineBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
