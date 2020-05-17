import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.SearchComponent } from './app.search.component';

describe('App.SearchComponent', () => {
  let component: App.SearchComponent;
  let fixture: ComponentFixture<App.SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
