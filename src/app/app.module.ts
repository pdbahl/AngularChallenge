import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http'





import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

import { AuthGuard } from '../services/auth.guard';
import { OrderByPipe } from '../services/order-by.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { Admin } from './Models/Admin';
import { EmployeeService } from '../services/employee.service';
import { User } from './Models/User';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    OrderByPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  exports:[
    OrderByPipe
  ],
  providers: [EmployeeService,AuthGuard,User],
  bootstrap: [AppComponent]
})
export class AppModule { }
