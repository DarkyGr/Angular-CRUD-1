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

  // Button
  AddOrEdit(){
    this.selectedEmployee.id = this.employeeArray.length + 1;
    this,this.employeeArray.push(this.selectedEmployee);

    this.selectedEmployee = new Employee();
  }
}
