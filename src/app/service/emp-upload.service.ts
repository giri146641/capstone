import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { EmployeeDetail } from '../models/EmployeeDetails';
@Injectable({

  providedIn: 'root'

})

export class EmpUploadService {

  private currentUserSubject: BehaviorSubject<EmployeeDetail>;

  public currentUser: Observable<EmployeeDetail>;

constructor(private http: HttpClient) {

 let c=localStorage.getItem('currentUser');

 let test= c!=null ?JSON.parse (c):'';

 this.currentUserSubject = new BehaviorSubject<EmployeeDetail>(test);

 this.currentUser = this.currentUserSubject.asObservable();

}

public get currentUserValue(): EmployeeDetail {

 return this.currentUserSubject.value;

}



  EmployeeDetails(details: EmployeeDetail) {

    return this.http.post<any>("https://localhost:7183/api/EmployeeDetails",details)

    .pipe(map(userData => {

      let user=new EmployeeDetail();


    user.username = userData.username;

    user.userId = userData.userId;

    user.password = userData.password;

    user.organizationNumber = userData.organizationNumber;

    user.gender = userData.gender;

    user.city = userData.city;

    user.contactNumber = userData.contactNumber;

    user.dateOfBirth = userData.dateOfBirth;

    user.employeeEmail = userData.employeeEmail;

    user.designation = userData.designation;

    user.organizationNumber = userData.organizationName;

    return user;

}));

}

}