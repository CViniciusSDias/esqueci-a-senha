import { TestBed } from '@angular/core/testing';

import { RecuperacaoService } from './recuperacao.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RecuperacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      RecuperacaoService
    ]
  }));

  it('should be created', () => {
    const service: RecuperacaoService = TestBed.get(RecuperacaoService);
    expect(service).toBeTruthy();
  });
});
