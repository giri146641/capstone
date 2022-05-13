import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  [x: string]: any;

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  EmpInfo(){
    this.route.navigateByUrl('empInfo');
  }
  OrgInfo(){
    this.route.navigateByUrl('dashboard');
  }
  SurveySummary(){
    this.route.navigateByUrl('SurveySummary');
  }

}
