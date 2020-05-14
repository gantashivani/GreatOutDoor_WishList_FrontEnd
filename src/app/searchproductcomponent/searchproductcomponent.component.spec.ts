import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchproductcomponentComponent } from './searchproductcomponent.component';

describe('SearchproductcomponentComponent', () => {
  let component: SearchproductcomponentComponent;
  let fixture: ComponentFixture<SearchproductcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchproductcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchproductcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
