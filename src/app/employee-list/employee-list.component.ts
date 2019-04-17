import { Component, OnInit } from '@angular/core';
import {employees} from "../employees.json";
import {EmployeeHolderService} from '../employee-holder.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  users = employees;

  edit(u:any){
    this.router.navigateByUrl('/edit/'+u);
  }

  constructor(public employeeList:EmployeeHolderService,private router:Router) { }

  ngOnInit() {
    this.employeeList.employeeArray.forEach(employee =>{
      console.log(employee);
    })
  }

}