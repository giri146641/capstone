import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string | undefined;
  password: string | undefined;
  ngOnInit() {

  }
  login() : void {
    console.log(this.username);
    if(this.username == 'Emp1' && this.password == 'Emp1'){
     this.router.navigate(["emp-portal"]);
    }
    else {
      alert("Invalid credentials");
    }
  }

adminLogin(){
  this.router.navigateByUrl('AdminLogin');
}
}
