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
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["organization"]);
    }else if(this.username == 'admin1' && this.password == 'admin1'){
      this.router.navigate(["organization"]);
    }else if(this.username == 'admin2' && this.password == 'admin2'){
      this.router.navigate(["organization"]);
    }else if(this.username == 'admin3' && this.password == 'admin3'){
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
