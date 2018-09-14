import { TestBed, inject } from '@angular/core/testing';

import { ApiserviceService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiserviceService],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([ApiserviceService], (service: ApiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
