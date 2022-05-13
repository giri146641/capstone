import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppComponent } from './app.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  //{path:'',component:AppComponent,pathMatch:'full'},
  {path:'',component:AdminloginComponent},
  {path:'employeelogin',component:EmployeeloginComponent},
  {path:'organization',component:OrganizationComponent},
  //{path:'employeelogin',component:EmploginComponent},
  {path:'empportal',component:EmployeeportalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
