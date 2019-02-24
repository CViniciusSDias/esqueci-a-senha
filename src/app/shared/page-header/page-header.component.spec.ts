import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderPage } from './page-header.page';

describe('PageHeaderPage', () => {
  let component: PageHeaderPage;
  let fixture: ComponentFixture<PageHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
