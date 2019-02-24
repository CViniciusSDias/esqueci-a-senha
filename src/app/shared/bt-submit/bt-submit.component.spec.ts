import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtSubmitPage } from './bt-submit.page';

describe('BtSubmitPage', () => {
  let component: BtSubmitPage;
  let fixture: ComponentFixture<BtSubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtSubmitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
