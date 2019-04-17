import { Injectable } from '@angular/core';
import {employees} from './employees.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHolderService {

  
  employeeArray = employees;
  constructor() { }
}
