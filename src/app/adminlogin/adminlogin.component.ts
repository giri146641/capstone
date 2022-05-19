import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './Adminlogin.component.html',
  styleUrls: ['./Adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router) { }
adminId:string | undefined;
username: string | undefined;
password: string | undefined;


  ngOnInit() {
  }

  login() : void {
    console.log(this.username);
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["adminDashboard"]);
    }
    else {
      alert("Invalid credentials");
    }
  }
  emplogin(){
    this.router.navigateByUrl('/employeelogin');
  }
  }