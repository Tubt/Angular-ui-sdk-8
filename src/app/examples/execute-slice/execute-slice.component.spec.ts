import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteSliceComponent } from './execute-slice.component';

describe('ExecuteSliceComponent', () => {
  let component: ExecuteSliceComponent;
  let fixture: ComponentFixture<ExecuteSliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteSliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
