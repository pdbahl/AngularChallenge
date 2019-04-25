import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { AuthGuard } from '../services/auth.guard';

const appRoutes: Routes = [
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path: 'login',component:LoginComponent},
    {path: 'list', component:EmployeeListComponent,canActivate:[AuthGuard] },
    {path: 'add', component:EmployeeAddComponent,canActivate:[AuthGuard]},
    {path: 'edit/:id', component:EmployeeEditComponent,canActivate:[AuthGuard]}

  ];


  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}