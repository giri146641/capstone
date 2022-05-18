import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeresponsesService } from '../services/employeeresponses.service';
import { EmployeedetailsService } from '../services/employeedetails.service';
import { EmployeeResponse } from '../models/EmployeeResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeportal',
  templateUrl: './employeeportal.component.html',
  styleUrls: ['./employeeportal.component.css']
})
export class EmployeeportalComponent implements OnInit {
  form: FormGroup;
  employeeData: any;
  questionData:any;
  userId: number | undefined;
  selectedValue:any="";
  //inputbox1:any="";
  inputvalue2: string = "";
  blurEvent(event: any, qid: any) {
    this.inputvalue2 = event.target.value;
    console.log(qid);

    this.questions.forEach(question => {
 
      question.question.forEach((ques: { questionId: any; answers: any; })=>{
        if (ques.questionId == qid) {
          console.log(ques.answers);
          question.answers.forEach(
            (answer: { answer:any }) => {
              console.log(answer.answer);
              console.log(event.target.value);
              answer.answer=event.target.value;
              console.log(answer.answer);
            }   
          )
          
        }
      })
    
      })
   console.log(this.questions);
  }

  constructor(fb: FormBuilder,
    private response: EmployeeresponsesService,
    private empdetails: EmployeedetailsService,
    private route: Router) {
    this.form = fb.group({
      //inputbox1:[null,Validators.required],
      //inputbox2:[null,Validators.required]
    });
  }
  ngOnInit(): void {
    this.empdetails.getEmployeeData().subscribe((data) => {
      this.employeeData = data;
      console.log(this.employeeData);
    });

    this.empdetails.getQuestions().subscribe(que=>{
      this.questionData=que;
      console.log(this.questionData);
    })

  }
  

  questions: any[] = [
    {
      question: [{ question_value: 'What do you think about our company culture?', questionId: 1, questionsType: 'text' }], answers: [{ answer:'' },
      ]
    },

    {
      question: [{ question_value: 'Which insurance policy benefits are u aware of?', questionId: 2, questionsType: 'checkbox' }], answers: [{ answerId: '2', answer: 'Mediclaim Policy', is_selected: false },
      { answerId: '3', answer: 'Personal Accident Policy', is_selected: false },
      { answerId: '4', answer: 'Term Life Policy', is_selected: false },
      { answerId: '5', answer: 'Parental Polic', is_selected: false }]
    },

    {
      question: [{ question_value: 'What do you think about the learning and development program of the company?', questionId: 3, questionsType: 'radio' }], answers: [{ answerId: '6', answer: 'Average', is_selected: false },
      { answerId: '7', answer: 'Good', is_selected: false },
      { answerId: '8', answer: 'VeryGood', is_selected: false },
      { answerId: '9', answer: 'Excellent', is_selected: false }]
    },

    {
      question: [{ question_value: 'What do you think about company infrastructure?', questionId: 4, questionsType: 'text' }], answers: [{ answer: '' },
      ]
    },

    {
      question: [{ question_value: 'What do you think about the cab facility in our company?', questionId: 5, questionsType: 'radio' }], answers: [{ answerId: '11', answer: 'Average', is_selected: false },
      { answerId: '12', answer: 'Good', is_selected: false },
      { answerId: '13', answer: 'VeryGood', is_selected: false },
      { answerId: '14', answer: 'Excellent', is_selected: false }]
    },
  ];
  loading: boolean = true;

  radioChecked(id: any, i: any) {
    selected_question: String;
    selected_answer: String;
    this.questions.forEach((question: { question: any[]; answers: any[]; }) => {
      question.question.forEach(ques=>{
        if (ques.questionId== id) {
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
      })
      
  }
  CheckBox(id: any, i: any) {

    this.questions.forEach((question: { question: any[]; answers: any[]; }) => {
      question.question.forEach(ques=>{
        if (ques.questionId== id) {
          question.answers.forEach(
            (answer: { answerId: any; is_selected: boolean; }) => {
              if (answer.answerId == i) {
                answer.is_selected = true;
              }
            }
          )
        }
      })
      })
      
  }
  
  submit() {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.questions);
    console.log(this.inputvalue2);
   console.log(this.employeeData[0].userId);
    this.questions.forEach((question: { question: { question_value: any; questionsType: any;questionId:any }[]; answers: { is_selected: any; answer: any; answerId: any }[]; }) => {

      question.question.forEach((quest: { question_value: any; questionId: any;questionsType: any}) => {
        console.log(quest.question_value);
        //console.log(quest.questionId);
        let user = new EmployeeResponse();
        user.userId = this.employeeData[0].userId;
        user.questionId = quest.questionId;
       
      this.selectedValue="";
      if(quest.questionsType==['radio']){
        console.log("this is my radio button");
        question.answers.forEach(
          answer  => {
        
            if (answer.is_selected) {
              //console.log(answer.answerId);
              console.log("radio button is"+answer.answer);
              this.selectedValue = answer.answerId;
            }
  
          }
        )
      }
      console.log(quest.questionsType);
      if(quest.questionsType==['checkbox']){
        console.log("this is my checkbox ");

        question.answers.forEach(
          answer  => {
            if (answer.is_selected) {
              //console.log(answer.answerId);
              this.selectedValue += answer.answerId+','+'';
            }
  
          }
        )
      }
      if(quest.questionsType==['text']){
        console.log("this is my textbox ");

      question.answers.forEach(
        answer  => { 
            //console.log(answer.answerId);
            this.selectedValue = answer.answer;
        }
      )
      }
      user.answer=this.selectedValue;
      console.log("response"+user.answer);
      console.log(user);
      this.response.EmployeeResponse(user)
      .subscribe(
        data => {
          //this.route.navigate(['/employeelogin']);
          alert("Submission is successfull");
          console.log(data);
        },
        error => {
          this.loading = false;
        })
    })
    }
    )

    
  }

}
