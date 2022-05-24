import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeDetails } from '../model/EmployeeDetails';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
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

    login(username:string, password:string) {

        return this.http.post<any>("https://localhost:7183/api/EmployeeDetails/GetEmployeeData", {
          "username": username,
          "password": password
        })
            .pipe(map(user => {
                let us=new EmployeeDetails();
                us.userId=user.userId;
                us.username=user.username;
                us.password=user.password;
                us.organizationNumber=user.organizationNumber;
                us.employeeEmail=user.employeeEmail;
                us.gender=user.gender;
                us.dateOfBirth=user.dateOfBirth;
                us.contactNumber=user.contactNumber;
                us.city=user.city;
                us.designation=user.designation;
                us.panNumber=user.panNumber;
                us.status=user.status;



                localStorage.setItem('currentUser', JSON.stringify(us));
                this.currentUserSubject.next(us);
                return us;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');

         this.currentUserSubject.next(new EmployeeDetails());
    }

   

}
