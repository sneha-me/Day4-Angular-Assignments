import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-edit-employee',
  templateUrl: './child-edit-employee.component.html',
  styleUrls: ['./child-edit-employee.component.css']
})
export class ChildEditEmployeeComponent implements OnInit {

  @Input() PersonData: IPerson;
  @Output() updatedEmployee: EventEmitter<IPerson> = new EventEmitter<IPerson>();

  updateEmployeeDetails(){
    console.log('saved');
    console.log('this.persondata---', this.PersonData);
    this.updatedEmployee.emit(this.PersonData);
  }
  
  constructor() { }

  ngOnInit() {
    console.log("PersonData----", this.PersonData);
  }

}
