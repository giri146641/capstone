import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
OrgInfo(){
    this.route.navigateByUrl('dashboard');
  }
  SurveySummary(){
    this.route.navigateByUrl('SurveySummary');
  }
  adminDashboard(){
    this.route.navigateByUrl('');
  }
}
