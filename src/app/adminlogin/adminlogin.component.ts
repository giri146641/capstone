import { Component, OnInit } from '@angular/core';
import { EmployeedetailsService } from '../services/employeedetails.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './Adminlogin.component.html',
  styleUrls: ['./Adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
credintials:any="";
  constructor(private router: Router,
    private details:EmployeedetailsService) { }
adminId:string | undefined;
username: string | undefined;
password: string | undefined;


  ngOnInit() {
//this.details.getAdminCredientials().subscribe(data=>{
//this.credintials=data;
//console.log(this.credintials);
//})
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["organization"]);
    }
    else {
      alert("Invalid credentials");
    }
  }

  emplogin(){
    this.router.navigateByUrl('/employeelogin');
  }
  }
