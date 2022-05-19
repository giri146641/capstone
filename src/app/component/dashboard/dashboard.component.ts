import { Component, OnInit ,ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { Organization } from 'src/app/model/organization';
import { OrganizationService } from 'src/app/service/organization.service';
import { Router } from '@angular/router';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { EmployeeService } from 'src/app/service/employee.service';
import { EmpUploadService } from 'src/app/service/emp-upload.service';
import { EmployeeDetails } from 'src/app/model/EmployeeDetails';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orgDetail!: FormGroup;
  orgObj : Organization = new Organization();
  orgList : Organization[] = []; 
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  name : any;
  csvRecords: any=[];
  header: boolean = true;
  empList: Employee[]=[];
  
  constructor(private formBuilder: FormBuilder, private orgService: OrganizationService ,private route: Router,private ngxCsvParser: NgxCsvParser,private empService : EmployeeService,private empUpload : EmpUploadService) { 
    this.orgList = [],
    this.getAllOrganization()
  }

  ngOnInit(): void {

    this.getAllOrganization()
    this.orgDetail = this.formBuilder.group({
      name : ['',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      id : [''],
      domain : [''],
      city : [''],
      pincode : ['']

  });
    
  }

  addOrganization(){

    console.log(this.orgDetail);
    this.orgObj.organizationNumber = this.orgDetail.value.id;
    this.orgObj.organizationName = this.orgDetail.value.name;
    this.orgObj.organizationDomain = this.orgDetail.value.domain;
    this.orgObj.city = this.orgDetail.value.city;
    this.orgObj.pincode = this.orgDetail.value.pincode; 

    this.orgService.addOrganization(this.orgObj).subscribe(res=>{
      console.log(res);
      this.getAllOrganization();
      this.orgDetail.reset();
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
    this.orgDetail.controls['id'].setValue(org.organizationNumber);
    this.orgDetail.controls['name'].setValue(org.organizationName);
    this.orgDetail.controls['domain'].setValue(org.organizationDomain);
    this.orgDetail.controls['city'].setValue(org.city);
    this.orgDetail.controls['pincode'].setValue(org.pincode);
  }

  updateOrganization() {

    this.orgObj.organizationNumber = this.orgDetail.value.id;
    this.orgObj.organizationName = this.orgDetail.value.name;
    this.orgObj.organizationDomain = this.orgDetail.value.domain;
    this.orgObj.city = this.orgDetail.value.city;
    this.orgObj.pincode = this.orgDetail.value.pincode;

    this.orgService.updateOrganization(this.orgObj).subscribe(res=>{
      console.log(res);
      this.getAllOrganization();
    },err=>{
      console.log(err);
    });

  }

    deleteOrganization(org : Organization){

      this.orgService.deleteOrganization(org).subscribe(res=>{
        console.log(res);
        alert('Organization deleted succesfully')
        this.getAllOrganization();
      },err => {
        console.log(err);
      });

    }

    
  EmpInfo(){
    this.route.navigateByUrl('empInfo');
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit()
    } else {
      this.orgList = this.orgList.filter(res =>{
        return res.organizationName.toLowerCase().match(this.name.toLocaleLowerCase());
      } ) 
    }
  }

  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .subscribe({
        next: (result): void => {
          console.log('Result', result);
          this.csvRecords = result;
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        }
      });
  }

  uploadEmployee() {
    let user = new EmployeeDetails(); 
    console.log('n=',this.csvRecords.length);
    for (let i = 0; i < this.csvRecords.length; i++){
    user.city = this.csvRecords[i].City;
    user.username = this.csvRecords[i].Username;
    user.contactNumber = this.csvRecords[i].ContactNumber;
    user.dateOfBirth = this.csvRecords[i].DateOfBirth;
    user.designation = this.csvRecords[i].Degisnation;
    user.employeeEmail = this.csvRecords[i].EmployeeEmail;
    user.gender = this.csvRecords[i].Gender;
    user.organizationName = this.csvRecords[i].OrganizationName;
    user.organizationNumber = this.csvRecords[i].OrganizationNumber;
    user.panNumber = this.csvRecords[i].PanNumber;
    user.password = this.csvRecords[i].Password;
    user.userId = this.csvRecords[i].UserID;
    user.status = this.csvRecords[i].Status;
    this.empUpload.EmployeeDetails(user).subscribe((res: any)=>{
      console.log(res);
    },(err: any)=>{
      console.log(err);
    });
  }
 }
}