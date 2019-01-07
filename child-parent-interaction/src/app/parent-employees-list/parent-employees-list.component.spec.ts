import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEmployeesListComponent } from './parent-employees-list.component';

describe('ParentEmployeesListComponent', () => {
  let component: ParentEmployeesListComponent;
  let fixture: ComponentFixture<ParentEmployeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentEmployeesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
