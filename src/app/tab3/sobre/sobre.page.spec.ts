import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppVersion} from '@ionic-native/app-version/ngx';

import {SobrePage} from './sobre.page';

describe('SobrePage', () => {
    let component: SobrePage;
    let fixture: ComponentFixture<SobrePage>;
    let appVersionSpy: AppVersion;

    beforeEach(async(() => {
        appVersionSpy = jasmine.createSpyObj('AppVersion', {getVersionNumber: Promise.resolve()});

        TestBed.configureTestingModule({
            declarations: [SobrePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: AppVersion, useValue: appVersionSpy}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SobrePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
