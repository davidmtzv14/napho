import { TestBed } from '@angular/core/testing';

import { FeedResolverService } from './feed-resolver.service';

describe('FeedResolverService', () => {
  let service: FeedResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
