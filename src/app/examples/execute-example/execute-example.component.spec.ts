import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteExampleComponent } from './execute-example.component';

describe('ExecuteExampleComponent', () => {
  let component: ExecuteExampleComponent;
  let fixture: ComponentFixture<ExecuteExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
