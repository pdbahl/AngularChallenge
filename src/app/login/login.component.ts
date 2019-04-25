import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {EmployeeService} from '../../services/employee.service';
import { Admin } from '../Models/Admin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  submitted = false;
  

  

  constructor(private fb: FormBuilder,private router:Router,public authService:AuthService,private employeeService:EmployeeService) {
  }

  
  login() {
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    let obj = new Admin(this.loginForm.get('username').value,this.loginForm.get('password').value);

    if(this.employeeService.logins.map(function(e) { return e.EMAIL; }).indexOf(this.loginForm.get('username').value)<=-1
      && this.employeeService.logins.map(function(e) { return e.PASSWORD; }).indexOf(this.loginForm.get('password').value)<=-1){
      alert('Invalid username or password');
      return;
    }
    localStorage.setItem("isLoggedIn","true");
    this.authService.isLoggedIn=true;
    this.router.navigateByUrl('/list')
    
  }

  refresh(){
    this.employeeService.getEmployees();
  }
  
  get username() {return this.loginForm.get('username');}
  get password() {return this.loginForm.get('password');} 

  ngOnInit() {
    this.employeeService.login();
    this.loginForm = this.fb.group({
      username: new FormControl("", [Validators.required,Validators.minLength(4),Validators.maxLength(35)]),
      password: new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(35), Validators.pattern("[A-Za-z\\'\\- 0-9]*")])
    })
  }





}
