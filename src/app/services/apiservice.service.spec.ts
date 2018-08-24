import { TestBed, inject } from '@angular/core/testing';

import { ApiserviceService } from './api.service';

describe('ApiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiserviceService]
    });
  });

  it('should be created', inject([ApiserviceService], (service: ApiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
