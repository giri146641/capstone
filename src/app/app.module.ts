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
