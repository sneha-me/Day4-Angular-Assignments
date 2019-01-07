import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEditEmployeeComponent } from './child-edit-employee.component';

describe('ChildEditEmployeeComponent', () => {
  let component: ChildEditEmployeeComponent;
  let fixture: ComponentFixture<ChildEditEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEditEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
