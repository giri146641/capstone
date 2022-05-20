import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeresponsesService } from '../services/employeeresponses.service';
import { EmployeedetailsService } from '../services/employeedetails.service';
import { EmployeeResponse } from '../models/EmployeeResponse';
import { Router } from '@angular/router';
import { AnswersModel } from '../models/EmployeeResponse';

@Component({
  selector: 'app-employeeportal',
  templateUrl: './employeeportal.component.html',
  styleUrls: ['./employeeportal.component.css']
})
export class EmployeeportalComponent implements OnInit {
  form: FormGroup;
  employeeResponse: any;
  questionData: any;
  questionList: any;

  userId: number | undefined;
  selectedValue: any;
  inputvalue2: any = [];
  blurEvent(event: any, qid: any) {
    console.log(qid);

    this.questions.forEach(question => {

      question.question.forEach((ques: { questionId: any; answers: any; }) => {
        if (ques.questionId == qid) {
          console.log(ques.answers);
          question.answers.forEach(
            (answer: { answer: any }) => {
              console.log(answer.answer);
              console.log(event.target.value);
              answer.answer = event.target.value;
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
    });
  }
  ngOnInit(): void {
    this.empdetails.getQuestions().subscribe(que => {
      this.questionData = que;
      this.questionData.forEach((ques: { questionId: any; }) => {
        console.log(ques.questionId);
        for (let i = 0; i < 5; i++) {
          if (ques.questionId == i) {
            this.empdetails.checkEmployeeResponseById(ques.questionId).subscribe(answer => {
              this.selectedValue = answer;
              console.log(this.selectedValue);

            })

          }

        }
      })

      console.log(this.questionData);
    })


  }


  questions: any[] = [
    {
      question: [{ question_value: 'What do you think about our company culture?', questionId: 1, questionsType: 'text' }], answers: [{ answer: [''] },
      ]
    },

    {
      question: [{ question_value: 'Which insurance policy benefits are u aware of?', questionId: 2, questionsType: 'checkbox' }], answers: [{ answerId: ['2'], answer: 'Mediclaim Policy', is_selected: false },
      { answerId: ['3'], answer: 'Personal Accident Policy', is_selected: false },
      { answerId: ['4'], answer: 'Term Life Policy', is_selected: false },
      { answerId: ['5'], answer: 'Parental Polic', is_selected: false }]
    },

    {
      question: [{ question_value: 'What do you think about the learning and development program of the company?', questionId: 3, questionsType: 'radio' }], answers: [{ answerId: ['6'], answer: 'Average', is_selected: false },
      { answerId: ['7'], answer: 'Good', is_selected: false },
      { answerId: ['8'], answer: 'VeryGood', is_selected: false },
      { answerId: ['9'], answer: 'Excellent', is_selected: false }]
    },

    {
      question: [{ question_value: 'What do you think about company infrastructure?', questionId: 4, questionsType: 'text' }], answers: [{ answer: [''] },
      ]
    },

    {
      question: [{ question_value: 'What do you think about the cab facility in our company?', questionId: 5, questionsType: 'radio' }], answers: [{ answerId: ['11'], answer: 'Average', is_selected: false },
      { answerId: ['12'], answer: 'Good', is_selected: false },
      { answerId: ['13'], answer: 'VeryGood', is_selected: false },
      { answerId: ['14'], answer: 'Excellent', is_selected: false }]
    },
  ];
  loading: boolean = true;

  radioChecked(id: any, i: any) {
    selected_question: String;
    selected_answer: String;
    this.questions.forEach((question: { question: any[]; answers: any[]; }) => {
      question.question.forEach(ques => {
        if (ques.questionId == id) {
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
      question.question.forEach(ques => {
        if (ques.questionId == id) {
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

    let data = sessionStorage.getItem('key')
    console.log(data);
    this.questions.forEach((question: { question: { question_value: any; questionsType: any; questionId: number }[]; answers: { is_selected: any; answer: string[]; answerId: string[] }[]; }) => {

      question.question.forEach((quest: { question_value: any; questionId: number; questionsType: any }) => {
        let user = new EmployeeResponse();
        user.userId = Number(data);
        // user.userId = Number(this.employeeData[0].userId);
        user.questionId = quest.questionId;

        this.selectedValue = [];
        if (quest.questionsType == ['radio']) {
          question.answers.forEach(
            answer => {
              if (answer.is_selected) {
                this.selectedValue = answer.answerId
              }

            }
          )
        }
        if (quest.questionsType == ['checkbox']) {
          question.answers.forEach(
            answer => {
              if (answer.is_selected) {
                //this.selectedValue += answer.answerId+",";
                this.selectedValue.push(answer.answerId[0]);

              }
            }
          )
        }
        if (quest.questionsType == ['text']) {
          question.answers.forEach(
            answer => {
              //this.selectedValue =[answer.answer];
              this.selectedValue.push(answer.answer);
            }
          )
        }

        user.answerId = this.selectedValue;

        console.log(user);
        this.response.EmployeeResponse(user)
          .subscribe(
            res => {
              alert("Submission is successfull");
              this.route.navigateByUrl('/employeelogin');
              console.log(res);
            },
            error => {
              this.loading = false;
              console.log(error);
              alert("User is already submitted");
            })
      })

    }
    )


  }

}
