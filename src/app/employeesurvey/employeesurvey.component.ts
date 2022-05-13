import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employeesurvey',
  templateUrl: './employeesurvey.component.html',
  styleUrls: ['./employeesurvey.component.css']
})
export class EmployeesurveyComponent implements OnInit {

  employeesurveyForm: FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder) {
    this.employeesurveyForm = this.formbuilder.group({
      empid: ['', Validators.required],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4:['',Validators.required],
      question5: ['', Validators.required]
   });
   }
   get f() { return this.employeesurveyForm.controls; }
  ngOnInit(): void {
    this.employeesurveyForm = this.formbuilder.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4:['',Validators.required],
      question5: ['', Validators.required]
   });
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.employeesurveyForm);
  }
}

