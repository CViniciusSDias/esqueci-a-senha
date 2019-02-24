import { TestBed } from '@angular/core/testing';

import { AppRateService } from './app-rate.service';

describe('AppRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppRateService = TestBed.get(AppRateService);
    expect(service).toBeTruthy();
  });
});
