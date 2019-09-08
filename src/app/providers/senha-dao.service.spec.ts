import {TestBed} from '@angular/core/testing';

import {SenhaDaoService} from './senha-dao.service';

describe('SenhaDaoService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SenhaDaoService = TestBed.get(SenhaDaoService);
        expect(service).toBeTruthy();
    });
});
