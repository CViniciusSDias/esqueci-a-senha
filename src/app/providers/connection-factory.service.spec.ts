import {TestBed} from '@angular/core/testing';

import {ConnectionFactoryService} from './connection-factory.service';

describe('ConnectionFactoryService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ConnectionFactoryService = TestBed.get(ConnectionFactoryService);
        expect(service).toBeTruthy();
    });
});
