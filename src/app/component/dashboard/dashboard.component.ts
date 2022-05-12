import { Component, OnInit ,ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { Organization } from 'src/app/model/organization';
import { OrganizationService } from 'src/app/service/organization.service';
import { Router } from '@angular/router';

export class CsvData {
  public empid: any;
  public empname: any;
  public companyName: any;
  public address: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orgDetail !: FormGroup;
  orgObj : Organization = new Organization();
  orgList : Organization[] = []; 
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  name : any;
  
  constructor(private formBuilder: FormBuilder, private orgService: OrganizationService ,private route: Router) { 
    this.orgList = [],
    this.getAllOrganization()
  }

  ngOnInit(): void {

    this.getAllOrganization()
    this.orgDetail = this.formBuilder.group({
      name : [''],
      id : [''],
      domain : [''],
      city : [''],
      pincode : ['']

  });
    
  }

  // addDemoOrganization(){
  //   this.orgList=[
  //     {id:108,name:"Mercer",domain:"Insurance",city:"Pune",pincode:491001},
  //     {id:121,name:"HDFC Bank",domain:"Banking",city:"Mumbai",pincode:43210},
  //     {id:199,name:"Infosys",domain:"Tech",city:"Banglore",pincode:472261},
  //   ]
  // }

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
    this.orgDetail.controls['id'].setValue(org.id);
    this.orgDetail.controls['name'].setValue(org.name);
    this.orgDetail.controls['domain'].setValue(org.domain);
    this.orgDetail.controls['city'].setValue(org.city);
    this.orgDetail.controls['pincode'].setValue(org.pincode);
  }

  updateOrganization() {

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
        this.getAllOrganization();
      },err => {
        console.log(err);
      });

    }

    uploadListener($event: any): void {

      let text = [];
      let files = $event.srcElement.files;
  
      if (this.isValidCSVFile(files[0])) {
  
        let input = $event.target;
        let reader = new FileReader();
        reader.readAsText(input.files[0]);
  
        reader.onload = () => {
          let csvData = reader.result;
          let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
  
          let headersRow = this.getHeaderArray(csvRecordsArray);
  
          this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        };
  
        reader.onerror = function () {
          console.log('error is occured while reading file!');
        };
  
      }
    }

    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
      let csvArr = [];
  
      for (let i = 1; i < csvRecordsArray.length; i++) {
        let curruntRecord = (<string>csvRecordsArray[i]).split(',');
        if (curruntRecord.length == headerLength) {
          let csvRecord: CsvData = new CsvData();
          csvRecord.empid = curruntRecord[0].trim();
          csvRecord.empname = curruntRecord[1].trim();
          csvRecord.companyName = curruntRecord[2].trim();
          csvRecord.address = curruntRecord[3].trim();
          csvArr.push(csvRecord);
        }
      }
      return csvArr;
    }

  //check etension
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  EmpInfo(){
    this.route.navigateByUrl('empInfo');
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit()
    } else {
      this.orgList = this.orgList.filter(res =>{
        return res.name.toLowerCase().match(this.name.toLocaleLowerCase());
      } ) 
    }
  }



  
  }





