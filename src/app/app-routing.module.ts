import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SurveySummaryComponent } from './survey-summary/survey-summary.component';
import { ViewResponseComponent } from './view-response/view-response.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'empInfo',component:EmpInfoComponent},
    {path:'',component:AdminDashboardComponent},
    {path:'SurveySummary',component:SurveySummaryComponent},
    {path:'ViewResponse', component:ViewResponseComponent},
    {path:'sidebar', component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
