import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmpURL : string;

  constructor(private http: HttpClient) { 

    this.getEmpURL = 'http://localhost:3000/orgList'
  }

    getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpURL);
   }
}
