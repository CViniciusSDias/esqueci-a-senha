import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhasPage } from './senhas.page';

describe('SenhasPage', () => {
  let component: SenhasPage;
  let fixture: ComponentFixture<SenhasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
