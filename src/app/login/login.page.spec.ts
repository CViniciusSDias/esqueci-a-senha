import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { RecuperacaoService } from '../providers/recuperacao.service';
import { of } from 'rxjs';

import { LoginPage } from './login.page';
import { AppRateService } from '../providers/app-rate.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    const recuperacaoServiceSpy = jasmine.createSpyObj('RecuperacaoService', { recuperarResposta: of(true) })
    const appRateServiceSpy = jasmine.createSpyObj('AppRate', ['pedirAvaliacao']);
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [
        { provide: RecuperacaoService, useValue: recuperacaoServiceSpy },
        { provide: AppRateService, useValue: appRateServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
