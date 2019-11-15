import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetnamePage } from './componetname.page';

describe('ComponetnamePage', () => {
  let component: ComponetnamePage;
  let fixture: ComponentFixture<ComponetnamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponetnamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponetnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
