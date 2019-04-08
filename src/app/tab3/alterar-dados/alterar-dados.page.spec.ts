import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarDadosPage } from './alterar-dados.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('AlterarDadosPage', () => {
  let component: AlterarDadosPage;
  let fixture: ComponentFixture<AlterarDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarDadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
