import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD';

  employeeArray: Employee[] =[
    {id: 1, name: "Jade", country: "MX"},
    {id: 2, name: "Peny", country: "MX"},
    {id: 3, name: "Carl", country: "MX"},
  ];

  // New Employee
  selectedEmployee: Employee = new Employee();

  // Open for edit
  OpenForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }

  // Add Button
  AddOrEdit(){
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);      
    }
    
    this.selectedEmployee = new Employee();
  }

  // Delete Button
  Delete(){
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }    
  }
}
