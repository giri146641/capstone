import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { Organization } from 'src/app/model/organization';
import { OrganizationService } from 'src/app/service/organization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Organization : any;
  orgDetail !: FormGroup;
  orgObj : Organization = new Organization();
  orgList : Organization[] = []; 
  

  constructor(private formBuilder: FormBuilder, private orgService: OrganizationService) { }

  ngOnInit(): void {

    this.getAllOrganization();
    this.orgDetail = this.formBuilder.group({
      name : [''],
      id : [''],
      domain : [''],
      city : [''],
      pincode : ['']

  });
    
  }

  addOrganization(){

    console.log(this.orgDetail);
    this.orgObj.id = this.orgDetail.value.id;
    this.orgObj.name = this.orgDetail.value.name;
    this.orgObj.domain = this.orgDetail.value.domain;
    this.orgObj.city = this.orgDetail.value.city;
    this.orgObj.pincode = this.orgDetail.value.pincode; 

    this.orgService.addOrganization(this.orgObj).subscribe(res=>{
      console.log(res);
      this.getAllOrganization();
    },err=>{
      console.log(err);
    });

  }


  getAllOrganization() {
    this.orgService.getAllOrganization().subscribe(res=>{
      this.orgList = res;
    },_err=>{
      console.log("error while fetching data.")
    });
  }

  editOrganization(org : Organization){
    this.orgDetail.controls['id'].setValue(org.id);
    this.orgDetail.controls['name'].setValue(org.name);
    this.orgDetail.controls['domain'].setValue(org.domain);
    this.orgDetail.controls['city'].setValue(org.city);
    this.orgDetail.controls['pincode'].setValue(org.pincode);
  }

  updateOrganization(){

    this.orgObj.id = this.orgDetail.value.id;
    this.orgObj.name = this.orgDetail.value.name;
    this.orgObj.domain = this.orgDetail.value.domain;
    this.orgObj.city = this.orgDetail.value.city;
    this.orgObj.pincode = this.orgDetail.value.pincode; 

    this.orgService.updateOrganization(this.orgObj).subscribe(res=>{
      console.log(res);
      this.getAllOrganization();
    },err=>{
      console.log(err);
    })

  }

    deleteOrganization(org : Organization){

      this.orgService.deleteOrganization(org).subscribe(res=>{
        console.log(res);
        alert('Organization deleted succesfully')
      },err => {
        console.log(err);
      })

    }

    
      
      

  }





