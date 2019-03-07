import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownumberComponent } from './shownumber.component';

describe('ShownumberComponent', () => {
  let component: ShownumberComponent;
  let fixture: ComponentFixture<ShownumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShownumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
