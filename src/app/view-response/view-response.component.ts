import { Component, OnInit } from '@angular/core';
import { employeeResponse } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeedetailsService } from '../service/employeedetails.service';


@Component({
  selector: 'app-view-response',
  templateUrl: './view-response.component.html',
  styleUrls: ['./view-response.component.css']
})
export class ViewResponseComponent implements OnInit {
  responseList : employeeResponse[] = [];
  questions:any;
  responseObj : employeeResponse = new employeeResponse();
  id: any
  constructor(private empService: EmployeeService,private Inroute:ActivatedRoute,private question:EmployeedetailsService ) { }

  ngOnInit(): void {
    this.id=this.Inroute.snapshot.params['id'];
    let emp = new employeeResponse; 
    this.empService.getEmployeeResponseById(this.id).subscribe(res=>{
      this.responseList = res;
      console.log(this.responseList);
    },_err=>{
      console.log("error while fetching data.")
    });
    this.question.getQuestions().subscribe(data=>{
      this.questions=data;
      console.log(this.questions);
    })

  }

}
