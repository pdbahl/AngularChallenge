import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path: 'login',component:LoginComponent},
    {path: 'list', component:EmployeeListComponent },
    {path: 'add', component:EmployeeAddComponent},
    {path: 'edit/:id', component:EmployeeEditComponent}

  ];


  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}