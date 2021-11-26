import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.css']
})
export class GetEmployeesComponent implements OnInit {

  constructor(public service:EmployeeService) { }
  employees:any
  ngOnInit(): void {
    this.getEmployees()
  }
 
getEmployees(){

  this.service.getEmployees().subscribe(resultado=> {
    //this.employees=JSON.stringify(resultado)
    this.employees=resultado
  })
}

}
