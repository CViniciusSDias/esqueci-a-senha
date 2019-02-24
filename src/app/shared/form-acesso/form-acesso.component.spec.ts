import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcessoPage } from './form-acesso.page';

describe('FormAcessoPage', () => {
  let component: FormAcessoPage;
  let fixture: ComponentFixture<FormAcessoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAcessoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAcessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
