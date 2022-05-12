import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeresponsesService } from '../services/employeeresponses.service';
import { EmployeedetailsService } from '../services/employeedetails.service';
import { EmployeeResponse } from '../models/EmployeeResponse';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeportal',
  templateUrl: './employeeportal.component.html',
  styleUrls: ['./employeeportal.component.css']
})
export class EmployeeportalComponent implements OnInit {
  form: FormGroup;
  employeeData:any ;
  userId:number | undefined;
  questions: any = [
    {
      questions: [{ question_value: 'What do you think about our company culture?', questionId: 1 }], answers: [{ answerId: 1, answer: 'Average', is_selected: true },
      { answerId: 2, answer: 'Good', is_selected: false },
      { answerId: 3, answer: 'VeryGood', is_selected: false },
      { answerId: 4, answer: 'Excellent', is_selected: false }]
    },

    {
      questions: [{ question_value: 'What do you think about payroll?', questionId: 2 }], answers: [{ answerId: 5, answer: 'Average', is_selected: true },
      { answerId: 6, answer: 'Good', is_selected: false },
      { answerId: 7, answer: 'VeryGood', is_selected: false },
      { answerId: 8, answer: 'Excellent', is_selected: false }]
    },

    {
      questions: [{ question_value: 'What do you think about our company benfites regarding insurance?', questionId: 9 }], answers: [{ answerId: 1, answer: 'Average', is_selected: true },
      { answerId: 10, answer: 'Good', is_selected: false },
      { answerId: 11, answer: 'VeryGood', is_selected: false },
      { answerId: 12, answer: 'Excellent', is_selected: false }]
    },

    {
      questions: [{ question_value: 'What do you think about our company infrastructure?', questionId: 4 }], answers: [{ answerId: 13, answer: 'Average', is_selected: true },
      { answerId: 14, answer: 'Good', is_selected: false },
      { answerId: 15, answer: 'VeryGood', is_selected: false },
      { answerId: 16, answer: 'Excellent', is_selected: false }]
    },

    {
      questions: [{ question_value: 'What do you think about the cab facility in our company?', questionId: 5 }], answers: [{ answerId: 17, answer: 'Average', is_selected: true },
      { answerId: 18, answer: 'Good', is_selected: false },
      { answerId: 19, answer: 'VeryGood', is_selected: false },
      { answerId: 20, answer: 'Excellent', is_selected: false }]
    },
  ];
  loading: boolean = true;



  constructor(fb: FormBuilder,
    private response: EmployeeresponsesService,
    private empdetails: EmployeedetailsService,
    private route: Router) {
    this.form = fb.group({
      questions: [null, Validators.required]
        });
  }
  radioChecked(id: any, i: any) {
    //console.log(id);
    //console.log(i);
    selected_question: String;
    selected_answer: String;
    this.questions.forEach((question: { questions: any; answers: any[]; }) => {

      if (question.questions == id) {
        question.answers.forEach(
          (answer: { is_selected: boolean; }) => {
            answer.is_selected = false;
          }
        )
        question.answers.forEach(
          (answer: { answerId: any; is_selected: boolean; }) => {
            if (answer.answerId == i) {
              answer.is_selected = true;
            }

          }
        )

      }
    })
  }
  ngOnInit(): void {
    this.empdetails.getEmployeeData().subscribe((data)=>{
      this.employeeData = data;
      console.log(this.employeeData);
  });
  }
  submit() {
    console.log(this.form);
    
    let user = new EmployeeResponse();
    user.userId=this.employeeData.userId;
    this.questions.forEach((question: { questions: { question_value: any; questionId: any; }[]; answers: { is_selected: any; answer: any; answerId: any }[]; }) => {
      //console.log(question.questions);
      question.questions.forEach((quest: { question_value: any; questionId: any; }) => {
        console.log(quest.question_value);
        console.log(quest.questionId);
        user.questionId = quest.questionId;
      })
      question.answers.forEach(
        (
          answer: { is_selected: any; answer: any; answerId: any }) => {
          if (answer.is_selected) {
            console.log(answer.answer);
            console.log(answer.answerId);
            user.answerId = answer.answerId;
            user.answer = answer.answer;
          }

        }
      )
      console.log(user);
    }
    )

      this.response.EmployeeResponse(user)
      .pipe(first())
      .subscribe(
        data => {
          this.route.navigate(['/employeelogin']);
          console.log(data);
        },
        error => {
          this.loading = false;
        })



    //console.log(this.form.value);
  }

}
