import { TestBed, inject } from '@angular/core/testing';

import { GitShowcaseService } from './git-showcase.service';

describe('GitShowcaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitShowcaseService]
    });
  });

  it('should be created', inject([GitShowcaseService], (service: GitShowcaseService) => {
    expect(service).toBeTruthy();
  }));
});
