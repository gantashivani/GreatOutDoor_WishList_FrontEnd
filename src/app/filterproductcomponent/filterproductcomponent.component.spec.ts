import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterproductcomponentComponent } from './filterproductcomponent.component';

describe('FilterproductcomponentComponent', () => {
  let component: FilterproductcomponentComponent;
  let fixture: ComponentFixture<FilterproductcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterproductcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterproductcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
