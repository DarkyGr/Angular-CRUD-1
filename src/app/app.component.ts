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

  selectedEmployee: Employee = new Employee();  
}
