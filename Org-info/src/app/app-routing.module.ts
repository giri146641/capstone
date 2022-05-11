import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';

const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'empInfo',component:EmpInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
