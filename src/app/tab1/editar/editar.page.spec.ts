import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {EditarPage} from './editar.page';
import {SenhaDaoService} from '../../providers/senha-dao.service';
import {of} from 'rxjs';
import {Senha} from '../../models/senha';

describe('EditarPage', () => {
    let component: EditarPage;
    let fixture: ComponentFixture<EditarPage>;
    let senhaDaoServiceSpy: SenhaDaoService;

    beforeEach(async(() => {
        senhaDaoServiceSpy = jasmine.createSpyObj('SenhaDaoService', {buscarUma: of(new Senha())});
        TestBed.configureTestingModule({
            declarations: [EditarPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule],
            providers: [
                {provide: SenhaDaoService, useValue: senhaDaoServiceSpy}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditarPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
