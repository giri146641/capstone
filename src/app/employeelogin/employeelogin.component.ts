import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { EmployeedetailsService } from '../service/employeedetails.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  empdetails: any;
  employeeData: any[] = [];
  loginForm: FormGroup;
  user:any;
  returnUrl: string="";
  submitted=false;
  loading=false;


  constructor(private router: Router,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private authentication:AuthenticationService,
    private service:EmployeedetailsService) {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    
   }
   get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.service.checkEmployeeReponses().subscribe(data=>{
  this.user=data;
  console.log(this.user);
  })
 
  this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/emp-portal';;
  }

  onSubmit() {
    this.submitted=true;
    this.loading=true;
    this.authentication.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(data=>{
      console.log(data);
      console.log(data.userId);
      if(data.userId!==0){
        sessionStorage.setItem('key', String(data.userId));
        for(let i=0;i<15;i++){
          if(data.userId==this.user[i].userId){
          console.log("already submiited");
          this.loginForm.reset();
          }else{
            this.router.navigate([this.returnUrl]);
          }
        }
      }else{
        alert("Inavid Credientials");
        this.loginForm.reset();
      }
    });
    
}
  adminlogin(){
    this.router.navigateByUrl('');
  }

}
