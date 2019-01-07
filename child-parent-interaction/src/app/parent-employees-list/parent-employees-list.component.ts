import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-employees-list',
  templateUrl: './parent-employees-list.component.html',
  styleUrls: ['./parent-employees-list.component.css']
})
export class ParentEmployeesListComponent implements OnInit {

  employees: any;
  showEmployee: boolean = false;
  showParentEmployees:boolean = true;
  personToEdit: any;

  ngOnInit() {
    this.employees = [
      {
       empId: 101,
       name:'Sneha',
       age: 28,
       designation: 'Web UI Developer',
       salary: 35000
      },
      {
        empId: 102,
        name:'Sanaya',
        age: 28,
        designation: 'Software Engg',
        salary: 20000
       },
       {
        empId: 103,
        name:'Somil',
        age: 28,
        designation: 'System Engg',
        salary: 10000
       },
       {
         empId: 104,
        name:'Sohail',
        age: 28,
        designation: 'Web UI Developer',
        salary: 30000
       },
       {
        empId: 105,
        name:'Suyog',
        age: 16,
        designation: 'NodeJS developer',
        salary: 25000
       }
   ]
  }

  EditEmployee(emp){
    console.log("employee selected:::", emp)
    this.showEmployee = true;
    this.showParentEmployees = false;
    this.personToEdit = emp;
  }

  updateParentComponent($event){
    console.log("$event------", $event);
    let updatedEmployees = this.employees.map(emp => {
      if(emp.empId === $event.empId) {
        return $event;
      }
      
      return emp;
    })
    this.employees = updatedEmployees;
    this.showParentEmployees = true;
    this.showEmployee = false;
  }

}
