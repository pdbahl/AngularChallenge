import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError} from 'rxjs';
import {User} from '../app/Models/User';
import { Admin } from '../app/Models/Admin';

const httpOptions = {
  
};


@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  employees:User[];
  logins:Admin[];

  baseUrl:string = 'http://localhost:3000';


  getEmployees(){
    this.http.get<User[]>(this.baseUrl+'/employees/list').subscribe(rs=>this.employees=rs['data'], 
    data  => {
      console.log("POST Request is successful ", data);
      });
  }
  
  addEmployee(employee:User){
    this.http.post<User>(this.baseUrl+'/employees/add',employee).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      });
  }
  editEmployee(employee){
    return this.http.put(this.baseUrl +'/employees/edit', employee).subscribe(
      data  => {
      console.log("PUT Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      });;
  }

  login(){ 
    this.http.get<User[]>(this.baseUrl+'/employees/login').subscribe(rs=>this.logins=rs['data'], 
    data  => {
      console.log("POST Request is successful ", data);
      });
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
