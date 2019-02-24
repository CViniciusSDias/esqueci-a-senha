import { TestBed } from '@angular/core/testing';

import { AlertFactoryService } from './alert-factory.service';

describe('AlertFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertFactoryService = TestBed.get(AlertFactoryService);
    expect(service).toBeTruthy();
  });
});
