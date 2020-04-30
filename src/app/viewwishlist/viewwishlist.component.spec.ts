import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwishlistComponent } from './viewwishlist.component';

describe('ViewwishlistComponent', () => {
  let component: ViewwishlistComponent;
  let fixture: ComponentFixture<ViewwishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
