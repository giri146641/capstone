import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { AnswersModel } from '../models/EmployeeResponse';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  constructor(private http:HttpClient) { }

  


  getEmployeeData(){
    return this.http.get("https://localhost:7183/api/EmployeeDetails");
  }
 getQuestions(){
   return this.http.get("https://localhost:7183/api/Question");
 }
 checkEmployeeReponses(){
  return this.http.get("https://localhost:7183/api/EmployeeResponses");
 }
 checkEmployeeResponseById(questionId: any): Observable<any>{
  const url=`https://localhost:7183/api/EmployeeResponses/${questionId}`;
  return this.http.get<AnswersModel>(url);
 }
}
