import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeHolderService } from '../employee-holder.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  private editForm: FormGroup
  id = 0;
  submitted = false
  constructor(private fb: FormBuilder, public route: ActivatedRoute, public employeeList: EmployeeHolderService, private router: Router) {
    this.route.params.subscribe(params => this.id = params['id']);

  }

  editEmployee() {
    
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.employeeList.employeeArray[this.id].firstName = this.editForm.get('firstName').value;
    this.employeeList.employeeArray[this.id].lastName = this.editForm.get('lastName').value;
    this.employeeList.employeeArray[this.id].address = this.editForm.get('address').value;
    this.employeeList.employeeArray[this.id].city = this.editForm.get('city').value;
    this.employeeList.employeeArray[this.id].state = this.editForm.get('state').value;
    this.employeeList.employeeArray[this.id].zip = this.editForm.get('zip').value;
    this.employeeList.employeeArray[this.id].homePhone = this.editForm.get('homePhone').value;
    this.employeeList.employeeArray[this.id].cellPhone = this.editForm.get('cellPhone').value;
    this.employeeList.employeeArray[this.id].email = this.editForm.get('email').value;

    this.router.navigateByUrl('/list');
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
      firstName: new FormControl(this.employeeList.employeeArray[this.id].firstName,
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(35),
        Validators.pattern("[A-Za-z]*")]),

      lastName: new FormControl(this.employeeList.employeeArray[this.id].lastName,
        [Validators.required, Validators.minLength(2),
        Validators.maxLength(35),
        Validators.pattern("[A-Za-z]*")]),

      address: new FormControl(this.employeeList.employeeArray[this.id].address,
        [Validators.required, Validators.minLength(10),
        Validators.maxLength(50)]),

      city: new FormControl(this.employeeList.employeeArray[this.id].city,
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50), Validators.pattern("[a-zA-Z][a-zA-Z ]+[a-zA-Z]$")]),

      state: new FormControl(this.employeeList.employeeArray[this.id].state, [Validators.required]),

      zip: new FormControl(this.employeeList.employeeArray[this.id].zip,
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(9),
        Validators.pattern("^[0-9]*")]),

      homePhone: new FormControl(this.employeeList.employeeArray[this.id].homePhone,
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]+$")]),

      cellPhone: new FormControl(this.employeeList.employeeArray[this.id].cellPhone,
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]+$")]),

      email: new FormControl(this.employeeList.employeeArray[this.id].email,
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]")])
    })
  }
}

