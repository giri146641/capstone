import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SurveySummaryComponent } from './survey-summary/survey-summary.component';
import { ViewResponseComponent } from './view-response/view-response.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeefeedbackComponent } from './employeefeedback/employeefeedback.component';

const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'empInfo/:id',component:EmpInfoComponent},
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'SurveySummary',component:SurveySummaryComponent},
    {path:'ViewResponse/:id', component:ViewResponseComponent},
    {path:'sidebar', component:SidebarComponent},
    {path:'emplogin', component:EmployeeloginComponent},
    {path:'',component:AdminloginComponent},
    {path:'emp-portal',component:EmployeeportalComponent},
    {path:'feedback',component:EmployeefeedbackComponent},
    {path:'admin',component:AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
