import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSenhaPage } from './form-senha.page';

describe('FormSenhaPage', () => {
  let component: FormSenhaPage;
  let fixture: ComponentFixture<FormSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSenhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
