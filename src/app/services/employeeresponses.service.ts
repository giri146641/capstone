import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeResponse } from '../models/EmployeeResponse';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeresponsesService {
  private currentUserSubject: BehaviorSubject<EmployeeResponse>;
  public currentUser: Observable<EmployeeResponse>;


constructor(private http: HttpClient) {
  let c=localStorage.getItem('currentUser');
  let test= c!=null ?JSON.parse (c):'';
  this.currentUserSubject = new BehaviorSubject<EmployeeResponse>(test);
  this.currentUser = this.currentUserSubject.asObservable();
}
public get currentUserValue(): EmployeeResponse {
  return this.currentUserSubject.value;
}

  EmployeeResponse(response: EmployeeResponse) {
    return this.http.post<any>("https://localhost:7183/api/EmployeeResponses",response)
    .pipe(map(userData => {
      let user=new EmployeeResponse();
      user.responseId=userData.responseId;
      user.userId=userData.userId;
      user.questionId=userData.questionId;
      user.answerId=userData.answerId;
      user.answer=userData.answer;
      return user;
  }));
  }
}
