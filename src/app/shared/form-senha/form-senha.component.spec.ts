import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormSenhaComponent} from './form-senha.component';

describe('FormSenhaPage', () => {
    let component: FormSenhaComponent;
    let fixture: ComponentFixture<FormSenhaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormSenhaComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormSenhaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
