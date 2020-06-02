import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteAttributeComponent } from './execute-attribute.component';

describe('ExecuteAttributeComponent', () => {
  let component: ExecuteAttributeComponent;
  let fixture: ComponentFixture<ExecuteAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
