import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private router: Router) { }
EmpId:number | undefined;
username: string | undefined;
password: string | undefined;


  ngOnInit() {
  }

  login() : void {
    if(this.username == 'employee' && this.password == 'employee' && this.EmpId==12345){
     this.router.navigate(["empportal"]);
    }  
    else {
      alert("Invalid credentials");
    }
  }
  adminlogin(){
    this.router.navigateByUrl('');
  }

}
