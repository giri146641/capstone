export class EmployeeResponse{
    "responseId": number=0;
  "userId": number=0;
  "questionId": number=0;
  "answerId": any;
}
export class AnswersList{
  "answer":string="";
  "answerId":string="";
  "is_selected":string="";

}
export class QuestionList{
  "questionId":string="";
  "questionsType":string="";
  "question_value":string="";
  "answers":any[]=[];
}

export class AnswersModel{
  
    "answerId": number=0;
    "questionId": number=0;
    "answer1": string="";
  
}