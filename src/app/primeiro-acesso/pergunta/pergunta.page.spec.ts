import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaPage } from './pergunta.page';

describe('PerguntaPage', () => {
  let component: PerguntaPage;
  let fixture: ComponentFixture<PerguntaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerguntaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
