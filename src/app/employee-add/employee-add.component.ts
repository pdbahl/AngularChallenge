import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';



@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  private addForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router, public employeeService: EmployeeService) {
  }


  addEmployee() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    let obj = {
      FIRST_NAME: this.addForm.get('firstName').value,
      LAST_NAME: this.addForm.get('lastName').value,
      ADDRESS: this.addForm.get('address').value,
      CITY: this.addForm.get('city').value,
      STATE: this.addForm.get('state').value,
      ZIP: this.addForm.get('zip').value,
      HOME_PHONE: this.addForm.get('homePhone').value,
      CELL_PHONE: this.addForm.get('cellPhone').value,
      EMAIL: this.addForm.get('email').value,
      ID:0
    }
    this.employeeService.addEmployee(obj);
  
  }

  get firstName() { return this.addForm.get('firstName'); }
  get lastName() { return this.addForm.get('lastName'); }
  get address() { return this.addForm.get('address'); }
  get city() { return this.addForm.get('city'); }
  get state() { return this.addForm.get('state'); }
  get zip() { return this.addForm.get('zip'); }
  get homePhone() { return this.addForm.get('homePhone'); }
  get cellPhone() { return this.addForm.get('cellPhone'); }
  get email() { return this.addForm.get('email'); }







  ngOnInit() {
   
    this.submitted = false;
    this.addForm = this.fb.group({
      firstName: new FormControl("",
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(35),
        Validators.pattern("[A-Za-z]*")]),

      lastName: new FormControl("",
        [Validators.required, Validators.minLength(2),
        Validators.maxLength(35),
        Validators.pattern("[A-Za-z]*")]),

      address: new FormControl("",
        [Validators.required, Validators.minLength(10),
        Validators.maxLength(50)]),

      city: new FormControl("",
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50), Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]),

      state: new FormControl(Validators.required),

      zip: new FormControl("",
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(9),
        Validators.pattern("^[0-9]*")]),

      homePhone: new FormControl("",
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]+$")]),

      cellPhone: new FormControl("",
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]+$")]),

      email: new FormControl("",
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]")])
    })
  }

}
