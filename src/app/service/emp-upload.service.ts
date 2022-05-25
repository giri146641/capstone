import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { EmployeeDetails } from '../model/EmployeeDetails';

@Injectable({

  providedIn: 'root'

})

export class EmpUploadService {

  private currentUserSubject: BehaviorSubject<EmployeeDetails>;

  public currentUser: Observable<EmployeeDetails>;

constructor(private http: HttpClient) {

 let c=localStorage.getItem('currentUser');

 let test= c!=null ?JSON.parse (c):'';

 this.currentUserSubject = new BehaviorSubject<EmployeeDetails>(test);

 this.currentUser = this.currentUserSubject.asObservable();

}

public get currentUserValue(): EmployeeDetails {

 return this.currentUserSubject.value;

}



  EmployeeDetails(details: EmployeeDetails) {

    return this.http.post<any>("https://localhost:7183/api/EmployeeDetails",details)

    .pipe(map(userData => {

      let user=new EmployeeDetails();


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

    user.organizationName = userData.organizationName;

    return user;

}));

}

}