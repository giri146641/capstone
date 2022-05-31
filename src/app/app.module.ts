import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SurveySummaryComponent } from './survey-summary/survey-summary.component';
import { ViewResponseComponent } from './view-response/view-response.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { EmployeefeedbackComponent } from './employeefeedback/employeefeedback.component';
import { Question2SummaryComponent } from './question2-summary/question2-summary.component';
import { Question3SummaryComponent } from './question3-summary/question3-summary.component';
import { Question5SummaryComponent } from './question5-summary/question5-summary.component';
import { Question7SummaryComponent } from './question7-summary/question7-summary.component';
import { Question8SummaryComponent } from './question8-summary/question8-summary.component';
import { Question9SummaryComponent } from './question9-summary/question9-summary.component';
import { Question10SummaryComponent } from './question10-summary/question10-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpInfoComponent,
    AdminDashboardComponent,
    SurveySummaryComponent,
    ViewResponseComponent,
    SidebarComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    EmployeeportalComponent,
    EmployeefeedbackComponent,
    Question2SummaryComponent,
    Question3SummaryComponent,
    Question5SummaryComponent,
    Question7SummaryComponent,
    Question8SummaryComponent,
    Question9SummaryComponent,
    Question10SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
