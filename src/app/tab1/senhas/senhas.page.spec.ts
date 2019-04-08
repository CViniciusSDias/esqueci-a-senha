import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { SenhaPipePipe } from './senha-pipe.pipe';
import { SenhasPage } from './senhas.page';
import { FiltroSenhasPipe } from './filtro-senhas.pipe';
import {LoadingController} from '@ionic/angular';

describe('SenhasPage', () => {
  let component: SenhasPage;
  let fixture: ComponentFixture<SenhasPage>;

  beforeEach(async(() => {
    const clipboardSpy = jasmine.createSpyObj('Clipboard', ['copy']);
    const loadingControllerSpy = jasmine.createSpyObj('LoadingController', {
      create: Promise.resolve({ present: () => {} }),
      dismiss: Promise.resolve()
    })
    TestBed.configureTestingModule({
      declarations: [ SenhasPage, SenhaPipePipe, FiltroSenhasPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: Clipboard, useValue: clipboardSpy },
        { provide: LoadingController, useValue: loadingControllerSpy }
      ]
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
