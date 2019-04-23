import { TestBed } from '@angular/core/testing';

import { WebsockService } from './websock.service';

describe('WebsockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsockService = TestBed.get(WebsockService);
    expect(service).toBeTruthy();
  });
});
