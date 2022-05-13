import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SurveySummaryComponent } from './survey-summary/survey-summary.component';
import { ViewResponseComponent } from './view-response/view-response.component';

const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'empInfo',component:EmpInfoComponent},
    {path:'',component:AdminDashboardComponent},
    {path:'SurveySummary',component:SurveySummaryComponent},
    {path:'ViewResponse', component:ViewResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
