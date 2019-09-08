import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SlidesPage} from './slides.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('SlidesPage', () => {
    let component: SlidesPage;
    let fixture: ComponentFixture<SlidesPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SlidesPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SlidesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
