import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineFilterComponent } from './combine-filter.component';

describe('CombineFilterComponent', () => {
  let component: CombineFilterComponent;
  let fixture: ComponentFixture<CombineFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
