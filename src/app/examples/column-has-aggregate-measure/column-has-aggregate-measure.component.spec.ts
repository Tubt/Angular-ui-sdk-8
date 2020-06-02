import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnHasAggregateMeasureComponent } from './column-has-aggregate-measure.component';

describe('ColumnHasAggregateMeasureComponent', () => {
  let component: ColumnHasAggregateMeasureComponent;
  let fixture: ComponentFixture<ColumnHasAggregateMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnHasAggregateMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnHasAggregateMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
