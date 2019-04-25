import { Component, OnInit } from '@angular/core';
import {EmployeeHolderService} from '../../services/employee-holder.service';
import { Router } from '@angular/router';
import {EmployeeService} from '../../services/employee.service';




@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
  refresh(){
    this.employeeService.getEmployees();
  }

  edit(u:any){
    console.log(this.employeeService.employees);
    this.router.navigateByUrl('/edit/'+u);
  }

  constructor(public employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.refresh();
    this.employeeService.getEmployees();
  }




}