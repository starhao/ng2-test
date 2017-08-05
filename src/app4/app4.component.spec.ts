import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App4Component } from './hero.component';

describe('App4Component', () => {
  let component: App4Component;
  let fixture: ComponentFixture<App4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
