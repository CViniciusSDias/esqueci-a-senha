import {AppRateService} from './app-rate.service';

describe('AppRateService', () => {
    let appRateSpy, service;

    beforeEach(() => {
        appRateSpy = jasmine.createSpyObj('AppRate', ['promptForRating']);
        service = new AppRateService(appRateSpy);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
