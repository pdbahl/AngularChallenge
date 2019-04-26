import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  private editForm: FormGroup
  id = 0;
  submitted = false
  constructor(private fb: FormBuilder, public route: ActivatedRoute, public employeeService: EmployeeService, private router: Router) {
    this.route.params.subscribe(params => this.id = params['id']);

  }

  editEmployee() {
    
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    let obj = {
      FIRST_NAME: this.editForm.get('firstName').value,
      LAST_NAME: this.editForm.get('lastName').value,
      ADDRESS: this.editForm.get('address').value,
      CITY: this.editForm.get('city').value,
      STATE: this.editForm.get('state').value,
      ZIP: this.editForm.get('zip').value,
      HOME_PHONE: this.editForm.get('homePhone').value,
      CELL_PHONE: this.editForm.get('cellPhone').value,
      EMAIL: this.editForm.get('email').value,
      ID:this.editForm.get('id').value
    }
    this.employeeService.editEmployee(obj);

  }

  get firstName() { return this.editForm.get('firstName'); }
  get lastName() { return this.editForm.get('lastName'); }
  get address() { return this.editForm.get('address'); }
  get city() { return this.editForm.get('city'); }
  get state() { return this.editForm.get('state'); }
  get zip() { return this.editForm.get('zip'); }
  get homePhone() { return this.editForm.get('homePhone'); }
  get cellPhone() { return this.editForm.get('cellPhone'); }
  get email() { return this.editForm.get('email'); }


  cancel() {
    this.router.navigateByUrl('/list');
  }

  ngOnInit() {
    this.submitted = false;
    this.editForm = this.fb.group({
      id:new FormControl(this.employeeService.employees[this.id].ID),
      firstName: new FormControl(this.employeeService.employees[this.id].FIRST_NAME,
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(35),
        Validators.pattern("[A-Za-z]*")]),

      lastName: new FormControl(this.employeeService.employees[this.id].LAST_NAME,
        [Validators.required, Validators.minLength(2),
        Validators.maxLength(35),
        Validators.pattern("[A-Za-z]*")]),

      address: new FormControl(this.employeeService.employees[this.id].ADDRESS,
        [Validators.required, Validators.minLength(10),
        Validators.maxLength(50)]),

      city: new FormControl(this.employeeService.employees[this.id].CITY,
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50), Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]),

      state: new FormControl(this.employeeService.employees[this.id].STATE, [Validators.required]),

      zip: new FormControl(this.employeeService.employees[this.id].ZIP,
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(9),
        Validators.pattern("^[0-9]*")]),

      homePhone: new FormControl(this.employeeService.employees[this.id].HOME_PHONE,
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]+$")]),

      cellPhone: new FormControl(this.employeeService.employees[this.id].CELL_PHONE,
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]+$")]),

      email: new FormControl(this.employeeService.employees[this.id].EMAIL,
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]")])
    })
  }
}

