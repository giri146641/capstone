import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { OrganizationComponent } from './organization/organization.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesurveyComponent } from './employeesurvey/employeesurvey.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    OrganizationComponent,
    EmployeeloginComponent,
    EmployeeportalComponent,
    EmployeesurveyComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
