import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  submitted = false;
  @Input()
  user= {firstName:"", 
        lastName:"", address:"", city:"", state:"",
        zip: 1,
        homePhone: 1,
        cellPhone:1, 
        email:"", username:"administrator",
        password: "password"};

  constructor(private fb: FormBuilder,private router:Router) {
    console.log(fb);
  }

  login() {
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.get('username').value!==this.user.username||this.loginForm.get('password').value!==this.user.password){
      alert("Invalid username or password");
      return;
    }
    this.router.navigateByUrl('/list')
  }

  get username() {return this.loginForm.get('username');}
  get password() {return this.loginForm.get('password');} 

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl("", [Validators.required,Validators.minLength(4),Validators.maxLength(35), Validators.pattern("[A-Za-z\\'\\- 0-9]*")]),
      password: new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(35), Validators.pattern("[A-Za-z\\'\\- 0-9]*")])
    })
  }





}
