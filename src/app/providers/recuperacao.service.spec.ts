import { TestBed } from '@angular/core/testing';

import { RecuperacaoService } from './recuperacao.service';

describe('RecuperacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperacaoService = TestBed.get(RecuperacaoService);
    expect(service).toBeTruthy();
  });
});
