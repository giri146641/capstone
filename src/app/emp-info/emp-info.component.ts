import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  empList : Employee[] = [];

  empStatus: string='';

  constructor(private empService: EmployeeService) { 
    this.empList = []
    this.addEmployee();
  }

  addEmployee(){
    this.empList = [
      {username:"Ankit@04",password:"Mercer@123",email:"ankit@gmail.com",gender:"male",dob:"23/10/1999",contactno:9131172312,city:"Durg",designation:"Software Enginner",pan:"FUA12345678",status:"Active",orgname:"Mercer"},
      {username:"Om@1999",password:"Mercer@123",email:"om@gmail.com",gender:"Female",dob:"2/7/1999",contactno:9131172222,city:"Durg",designation:"Software Enginner",pan:"FUA12345678",status:"Active",orgname:"Mercer"},
      {username:"Akhil@21",password:"Mercer@123",email:"akhil@gmail.com",gender:"male",dob:"23/10/1999",contactno:7131172312,city:"Durg",designation:"HR",pan:"FUA12345678",status:"Active",orgname:"Mercer"}
    ]
  }

  ngOnInit(): void {
  }

  onButtonGroupClick($event: { target: any; srcElement: any; }){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className = " active";
    }

  }

  getAllOrganization() {
    this.empService.getAllEmployee().subscribe(res=>{
      this.empList = res;
    },_err=>{
      console.log("error while fetching data.")
    });
  }

}
