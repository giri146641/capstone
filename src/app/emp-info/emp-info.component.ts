import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { Organization } from '../model/organization';
import { EmployeeService } from '../service/employee.service';
import { employeeResponse } from '../model/employee';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  empList : Employee[] = [];
  responseList : employeeResponse[] = [];
  empObj : Employee = new Employee();
  empStatus: string='';
  id: any;

  constructor(private empService: EmployeeService, private Inroute:ActivatedRoute,private route :Router) { 
    this.empList = []
  }

  ngOnInit(): void {

    this.id=this.Inroute.snapshot.params['id'];
    let emp = new Employee; 
    this.empService.getAllEmployee(this.id).subscribe(res=>{
      this.empList = res;
      console.log(this.empList);
    },_err=>{
      console.log("error while fetching data.")
    });
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

  viewResponse(){
    this.route.navigateByUrl('/ViewResponse');
  }

}
